import { View } from 'react-native';
import React from 'react';
import SettingProfileItem from '../../components/SettingProfileItem';
const SettingProfile = (props) => {
  return (
    <View>
      <SettingProfileItem name="ic-profile" title="Thông tin cá nhân" />
      <SettingProfileItem name="ic-password" title="Đổi mật khẩu" />
      <SettingProfileItem name="ic-help" title="Hỗ trợ" />
      <SettingProfileItem name="ic-feedback" title="Phản hồi" />
      <SettingProfileItem name="ic-regulation" title="Quy định" />
      <SettingProfileItem name="ic-history-membership" title="Lịch sử nâng cấp thành viên" />
      <SettingProfileItem name="ic-share" title="Chia sẻ" />
      <SettingProfileItem name="ic-sign-out" title="Đăng xuất" />
    </View>
  );
};

export default SettingProfile;
