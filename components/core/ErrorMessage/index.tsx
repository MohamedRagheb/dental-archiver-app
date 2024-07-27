// Components
import { Text, TouchableOpacity } from 'react-native';

// Types
import { FieldErrors, FieldValues } from 'react-hook-form';
import { Path } from 'react-hook-form';
import { useState } from 'react';

export default function ErrorMessage<T extends FieldValues>({
  error,
}: {
  error: FieldErrors<T>;
}) {
  const [long, setLong] = useState<boolean>(false);
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => setLong(!long)}>
      {error && (
        <Text
          ellipsizeMode={'tail'}
          numberOfLines={6}
          style={{
            position: 'absolute',
            flex: 1,
            bottom: -22,
            ...(!long && { maxHeight: 20 }),
            paddingHorizontal: 8,
            fontSize: 12,
            color: 'red',
          }}
        >
          {/*{Object.keys(error).toString()}*/}
          {/*{error?.type !== 'required' && error.message}*/}
        </Text>
      )}
    </TouchableOpacity>
  );
}
