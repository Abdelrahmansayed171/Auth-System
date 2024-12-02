import { useState, useCallback } from 'react';
import { z } from 'zod';

interface UseFormProps<T> {
  initialValues: T;
  validationSchema?: z.ZodType<T>;
  onSubmit: (values: T) => Promise<void>;
}

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormProps<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: keyof T, value: any) => {
      if (!validationSchema) return '';

      try {
        validationSchema.shape[name as string].parse(value);
        return '';
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.errors[0].message;
        }
        return 'Invalid value';
      }
    },
    [validationSchema]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;

      setFormState(prev => ({
        ...prev,
        values: { ...prev.values, [name]: newValue },
        errors: {
          ...prev.errors,
          [name]: validateField(name as keyof T, newValue),
        },
      }));
    },
    [validateField]
  );

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setFormState(prev => ({
      ...prev,
      touched: { ...prev.touched, [name]: true },
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        if (validationSchema) {
          validationSchema.parse(formState.values);
        }
        await onSubmit(formState.values);
      } catch (error) {
        if (error instanceof z.ZodError) {
          const errors = error.errors.reduce(
            (acc, curr) => ({
              ...acc,
              [curr.path[0]]: curr.message,
            }),
            {}
          );
          setFormState(prev => ({
            ...prev,
            errors: errors as Partial<Record<keyof T, string>>,
          }));
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState.values, onSubmit, validationSchema]
  );

  const resetForm = useCallback(() => {
    setFormState({
      values: initialValues,
      errors: {},
      touched: {},
    });
  }, [initialValues]);

  return {
    values: formState.values,
    errors: formState.errors,
    touched: formState.touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
}