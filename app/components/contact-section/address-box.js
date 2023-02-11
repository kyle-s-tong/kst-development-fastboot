import Component from '@glimmer/component';

export default class ContactSectionAddressBoxComponent extends Component {
  addressBoxData = [
    {
      name: 'address1',
      value: `Room 206, 230 Simin-daero, Dongan-gu <br>Anyang-si, Gyeonggi-do <br>South Korea`,
      iconPath: 'assets/svg/house.svg',
    },
    {
      name: 'phone',
      value: '(+82) 010-7170-7441',
      iconPath: 'assets/svg/phone.svg',
    },
    {
      name: 'email',
      value: 'info@kstdevelopment.com',
      iconPath: 'assets/svg/envelope.svg',
    },
    {
      name: 'website',
      value: 'www.kstdevelopment.com',
      iconPath: 'assets/svg/globe.svg',
    },
  ];
}
