// Types
import type { IMediaResource } from '@/types';
import type { IAvatarProps, IFile } from './types';

import { memo, useMemo } from 'react';

// Components
import { Icon } from '@/components/core/Icon';
import { Image, TouchableWithoutFeedback, View } from 'react-native';

// Hooks
import useUploadMedia from './useUploadMedia';

const Avatar: React.FC<IAvatarProps> = (props) => {
  const { pickImage, combinedCurrentValue, isLoading } = useUploadMedia(props);

  const placeholderUiAvatar = `https://ui-avatars.com/api/?name=${props.placeholderName.replace(' ', '+')}`;

  const uri = useMemo(() => {
    return combinedCurrentValue[0]
      ? combinedCurrentValue[0]?.hasOwnProperty('url')
        ? (combinedCurrentValue[0] as IMediaResource).url
        : (combinedCurrentValue[0] as IFile).uri
      : placeholderUiAvatar;
  }, [combinedCurrentValue]);

  return (
    <TouchableWithoutFeedback onPress={() => pickImage()} disabled={isLoading}>
      <View style={{ alignSelf: 'center' }}>
        <Image
          height={120}
          width={120}
          source={{ uri }}
          style={{ borderRadius: 60, ...(isLoading && { opacity: 0.5 }) }}
        />
        <Icon
          style={{
            color: '#555555',
            alignSelf: 'flex-end',
            marginTop: -20,
            fontSize: 25,
          }}
          name='camera-enhance'
          lib='MaterialIcons'
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(Avatar);
