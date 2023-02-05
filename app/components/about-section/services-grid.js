import Component from '@glimmer/component';

export default class AboutSectionServicesGridComponent extends Component {
  servicesData = [
    {
      title: 'Web Development',
      imagePath: 'assets/img/web-development.webp',
      description:
        'Build your website or backend system according to your needs, with updates all along the way.',
    },
    {
      title: 'Solutions Consultancy',
      imagePath: 'assets/img/consultancy.webp',
      description:
        'Provide recommendations on technology and/or architecture base on your business needs.',
    },
    {
      title: 'Infrastructure Management',
      imagePath: 'assets/img/infrastructure-management.webp',
      description:
        "Procure and maintain infrastructure in the cloud so you don't need to.",
    },
    {
      title: 'Testing and Quality Assurance',
      imagePath: '/ffdsaf/testing-and-qa',
      description:
        'Thorough test planning and execution to make sure you receive solutions of utmost quality.',
    },
  ];
}
