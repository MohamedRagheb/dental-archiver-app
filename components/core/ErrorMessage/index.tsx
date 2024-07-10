// Components
import { Text } from 'react-native';

// Types
import { FieldError } from 'react-hook-form';

export default function ErrorMessage({
  error,
}: {
  error: FieldError | undefined;
}) {
  return (
    <>
      {error && (
        <Text
          style={{
            position: 'absolute',
            bottom: -16,
            paddingHorizontal: 8,
            fontSize: 12,
            color: 'red',
          }}
        >
          {error.type !== 'required' && error.message}
        </Text>
      )}
    </>
  );
}
