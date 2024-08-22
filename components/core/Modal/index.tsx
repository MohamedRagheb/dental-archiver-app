// Components
import { View } from 'react-native';
import Typography from '@/components/core/Typography';

export default function Modal() {
  return (
    <View
      style={{
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
        }}
      >
        <Typography
          style={{
            backgroundColor: 'white',
            height: 'auto',
            paddingTop: 16,
            paddingHorizontal: 8,
            paddingBottom: 32,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          dolores eius eveniet incidunt itaque labore porro praesentium unde?
          Architecto consequatur consequuntur dolore in ipsam quasi saepe sint
          soluta, voluptas voluptatibus!
        </Typography>
      </View>
    </View>
  );
}
