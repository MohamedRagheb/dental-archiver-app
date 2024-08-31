// Components
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import Typography from '@/components/core/Typography';
import { IModalProps, IModalRef } from '@/components/core/Modal/types';
import {
  forwardRef,
  LegacyRef,
  PropsWithChildren,
  Ref,
  useImperativeHandle,
  useState,
} from 'react';
import { Icon } from '@/components/core/Icon';
import { useTranslation } from 'react-i18next';

const Dialog = (
  {
    children,
    persistent,
    title,
    isCentered,
    ...props
  }: PropsWithChildren<IModalProps>,
  ref: any
) => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
  };

  useImperativeHandle(ref, () => ({
    openModal: () => setIsVisible(true),
    closeModal: () => closeModal(),
    isOpen: () => isVisible,
  }));
//TODO:add_animation_slide
  return (
    <Modal
      {...props}
      ref={ref}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
      animationType='slide'
      transparent={props.transparent ?? true}
    >
      <TouchableWithoutFeedback onPress={() => !persistent && closeModal()}>
        <View
          style={{
            flex: 1,
            justifyContent: isCentered ? 'center' : 'flex-end',
            padding: isCentered ? 16 : 0,
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <TouchableWithoutFeedback
            onPress={(e) => !persistent && e.stopPropagation()}
          >
            <View
              style={{
                width: '100%',
                display: 'flex',
                gap: 16,
                backgroundColor: 'white',
                padding: 16,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              {props?.slots?.header ?? (
                <View
                  {...props.slotProps?.header}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    ...(typeof props.slotProps?.header?.style === 'object' &&
                    props.slotProps?.header?.style
                      ? props.slotProps.header.style
                      : {}),
                  }}
                >
                  <Typography variant={'h4'} {...props.slotProps?.title}>
                    {t(`modal.${title}`)}
                  </Typography>
                  <TouchableWithoutFeedback onPress={() => closeModal()}>
                    <Icon lib='AntDesign' name='close' />
                  </TouchableWithoutFeedback>
                </View>
              )}
              <View style={{ paddingBottom: 16 }} {...props.slotProps?.content}>
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default forwardRef(Dialog);
