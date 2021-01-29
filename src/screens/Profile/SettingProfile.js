import { View } from 'react-native';
import React from 'react';
import SettingProfileItem from '../../components/SettingProfileItem';
import LoginTypes from '../../redux/LoginRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationUtils } from '../../navigation';
import ProfileTypes from '../../redux/UserRedux/actions';
const onEditProfile = () => {
  NavigationUtils.push({
    screen: 'EditProfile',
    title: 'Thông tin cá nhân',
    isTopBarEnable: false,
  });
};
const SettingProfile = (props) => {
  var id = useSelector((state) => state.login.loginResponse.user.id);
  console.log(id);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(LoginTypes.userLogout());
  };
  const onProfile = () => {
    dispatch(ProfileTypes.userProfile(id));
  };
  return (
    <View>
      <SettingProfileItem
        name="ic-profile"
        title="Thông tin cá nhân"
        press={() => onEditProfile()}
      />
      <SettingProfileItem name="ic-password" title="Đổi mật khẩu" />
      <SettingProfileItem name="ic-help" title="Hỗ trợ" press={onProfile} />
      <SettingProfileItem name="ic-feedback" title="Phản hồi" />
      <SettingProfileItem name="ic-regulation" title="Quy định" />
      <SettingProfileItem name="ic-history-membership" title="Lịch sử nâng cấp thành viên" />
      <SettingProfileItem name="ic-share" title="Chia sẻ" />
      <SettingProfileItem name="ic-sign-out" title="Đăng xuất" press={onLogout} />
    </View>
  );
};

export default SettingProfile;
