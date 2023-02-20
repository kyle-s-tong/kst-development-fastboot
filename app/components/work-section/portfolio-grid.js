import Component from '@glimmer/component';

export default class WorkSectionPortfolioGridComponent extends Component {
  portfolioData = [
    {
      title: 'Realestate.co.nz',
      subtitle: 'Full-stack development',
      mainImagePath: 'assets/img/portfolio/thumb/p1.webp',
      secondaryImagePaths: [
        'assets/img/portfolio/large/p1.webp',
        'assets/img/portfolio/large/p2.webp',
      ],
      description: `We implemented the front-end real estate listing displayed here
                    from a provided design.This gave the agents all data needed to give their clients meaningful insights. We leveraged data captured
                    in Google Analytics via Elasticsearch to provide real time reports to agents wanting this data.`,
    },
    {
      title: 'Entrance Design',
      subtitle: 'Full-stack development',
      mainImagePath: 'assets/img/portfolio/thumb/p2.webp',
      secondaryImagePaths: ['assets/img/portfolio/large/p3.webp'],
      description: `We took a design from the client, implemented it, and then lifted and shifted infrastructure into AWS. We also
                    moved their website over to a single-page application for faster performance and modern security.
                    We host and support all of their infrastructure to ensure the site runs smoothly.`,
    },
    {
      title: 'Realestate.co.nz',
      subtitle: 'Backend Development',
      mainImagePath: 'assets/img/portfolio/thumb/p3.webp',
      secondaryImagePaths: ['assets/img/portfolio/large/p4.webp'],
      description: `We took data from a legacy platform and manipulated it to allow a customer service team to
                    input location data and define new areas based on points on a Google Maps instance.We then convert this to a
                    format the platform understands and export to the main application. This involved lots of heavy data lifting and manipulation,
                    as well as making sure the infrastructure could handle the load.`,
    },
  ];
}
