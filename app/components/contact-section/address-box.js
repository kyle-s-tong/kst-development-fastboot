import Component from '@glimmer/component';

export default class ContactSectionAddressBoxComponent extends Component {
  addressBoxData = {
    addressLine1: {
      value: 'Room 206, 230 Simin-daero, Dongan-gu',
      iconPath: 'assets/svg/house.svg',
    },
    addressLine2: { value: 'Anyang-si, Gyeonggi-do' },
    addressLine3: { value: 'South Korea' },
    phoneNumber: {
      value: '(+82) 010-7170-7441',
      iconPath: 'assets/svg/phone.svg',
    },
    email: {
      value: 'info@kstdevelopment.com',
      iconPath: 'assets/svg/envelope.svg',
    },
    website: {
      value: 'www.kstdevelopment.com',
      iconPath: 'assets/svg/globe.svg',
    },
  };
}
