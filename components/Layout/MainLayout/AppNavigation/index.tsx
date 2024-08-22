import { Link, usePathname } from 'expo-router';

// Components
import { View } from 'react-native';
import { Each } from '@/components/core/Each';
import Typography from '@/components/core/Typography';
import { Icon } from '@/components/core/Icon';
import {
  type INavigationItem,
  navigationLinks,
} from '@/components/Layout/MainLayout/AppNavigation/Links';

export default function AppNavigation() {
  return (
    <View
      style={{
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopColor: 'gray',
        borderTopWidth: 1,
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <Each<INavigationItem>
        of={navigationLinks}
        render={(item, index) => (
          <NavigationItem key={index} index={index} item={item} />
        )}
      />
    </View>
  );
}

function NavigationItem({
  item,
  index,
}: {
  item: INavigationItem;
  index: number;
}) {
  const pathname = usePathname();

  return (
    <Link href={item?.to} key={index}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          gap: 2,
        }}
      >
        <Icon
          style={item?.to === pathname && { color: '#312EA2' }}
          name={item?.icon?.name}
          lib={item?.icon?.lib}
        />
        <Typography
          style={item?.to === pathname && { color: '#312EA2' }}
          variant={'subtitle'}
        >
          {item?.text}
        </Typography>
      </View>
    </Link>
  );
}
