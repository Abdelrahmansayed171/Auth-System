
interface PasswordEvaluatorProps {
  password: string;
}

export function PasswordEvaluator({ password }: PasswordEvaluatorProps) {
  const getStrength = (pass: string) => {
    let score = 0;
    if (!pass) return score;

    // Award points for length
    if (pass.length > 8) score += 1;
    if (pass.length > 12) score += 1;

    // Award points for complexity
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    return score;
  };

  const strength = getStrength(password);
  const getColor = () => {
    if (strength < 2) return 'bg-red-500';
    if (strength < 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getMessage = () => {
    if (!password) return '';
    if (strength < 2) return 'Weak';
    if (strength < 4) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="mt-1">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} transition-all duration-300`}
          style={{ width: `${(strength / 5) * 100}%` }}
        />
      </div>
      <p className={`text-xs mt-1 ${getColor().replace('bg-', 'text-')}`}>
        {getMessage()}
      </p>
    </div>
  );
}