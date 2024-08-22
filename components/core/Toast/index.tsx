import Toast, { ErrorToast, SuccessToast } from 'react-native-toast-message';
import { observer } from '@/Utils/observer';
import { Text, View } from 'react-native';
import type { ToastConfigParams } from 'react-native-toast-message';

export default function ToastComponent() {
  observer.subscribe('notify', (config: ToastConfigParams<any>) => {
    Toast.show({
      ...config,
    });
  });
  return (
    <Toast
      position={'top'}
      topOffset={55}
      config={{
        success: (props) => (
          <SuccessToast
            {...props}
            style={{ width: '95%' }}
            renderLeadingIcon={() => (
              <View style={{ backgroundColor: 'green' }}>
                <Text> </Text>
              </View>
            )}
          />
        ),
        error: (props) => (
          <ErrorToast
            {...props}
            style={{ width: '95%' }}
            renderLeadingIcon={() => (
              <View style={{ backgroundColor: 'red' }}>
                <Text> </Text>
              </View>
            )}
          />
        ),
      }}
    />
  );
}
