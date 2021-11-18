const mainProgram = [
  {
    img: 'https://img.icons8.com/external-those-icons-fill-those-icons/40/ffffff/external-lecture-business-those-icons-fill-those-icons.png',
    alt: 'lecture',
    activity: 'Lecture',
    description: 'Listen to the speakers from various countries about animal shelter policy.',
  },
  {
    img: 'https://img.icons8.com/ios/40/ffffff/exhibition.png',
    alt: 'exhibition',
    activity: 'SA Exhibition',
    description: 'Appreciate various creations made by shelter volunteers.',
  },
  {
    img: 'https://img.icons8.com/fluency-systems-filled/40/ffffff/comment-discussion.png',
    alt: 'forum',
    activity: 'Forum',
    description: 'Have the time to share your thoughts and opinions with experts on each topic.',
  },
  {
    img: 'https://img.icons8.com/ios/40/ffffff/presentation.png',
    alt: 'workshop',
    activity: 'Workshop',
    description: 'Try creating your own work using an open source license rather than just watching.',
  },
  {
    img: 'https://img.icons8.com/ios-filled/40/ffffff/agree-.png',
    alt: 'sa ignite',
    activity: 'SA Ignite',
    description: 'Get opportunities to network with SA affiliates around the world, also after the summit.',
  },
];

mainProgram.forEach((part) => {
  const programPart = `<li class="item">
  <div class="item-content">
    <div class="icon-container">
      <img class="icon"
        src="${part.img}"
        alt="${part.alt}" />
    </div>
    <span class="title">
      ${part.activity}
    </span>
    <p class="description">
      ${part.description}
    </p>
  </div>
</li>`;
  document.querySelector('.main-program-list').insertAdjacentHTML('beforeend', programPart);
});

const speakersInfo = [
  {
    imgSrc: './images/speakers/speaker-1.jpg',
    name: 'Bagheera',
    position: 'President of Shaltered Animals Volunteer Club in Europe',
    about: 'Bagheera is leading animal rescue volunteer groups.',
  },
  {
    imgSrc: './images/speakers/speaker-2.jpg',
    name: 'Judy Hopps',
    position: 'Animal Lawyer',
    about: 'Owns an animal rights law firm.',
  },
  {
    imgSrc: './images/speakers/speaker-3.jpg',
    name: 'Pascal',
    position: 'PhD in Veterinary Medicine',
    about: 'Owns a veterinary clinic that provides free services for animals found on the street.',
  },
  {
    imgSrc: './images/speakers/speaker-4.jpg',
    name: 'Rimma Svekolnikova',
    position: 'Director of Prostokvashino Shelters in Russia',
    about: 'Has opened more than 40 animal shelters throughout Russia.',
  },
  {
    imgSrc: './images/speakers/speaker-5.jpg',
    name: 'Ms. Mochi',
    position: 'PhD in being a playful cat',
    about: 'Ms. Mochi is a professional taster of cat food for more than 15 years. She\'s also enjoying an opera purring.',
  },
  {
    imgSrc: './images/speakers/speaker-6.jpg',
    name: 'Mr. Snuggles',
    position: 'PhD in sniffing-snuffing',
    about: 'While sniffing-snuffing for more than 10 years, he manages to have a really good social skills.',
  },
];

speakersInfo.forEach((speaker) => {
  const speakerCard = `<li class="speaker-card">
  <div class="speaker-img-container">
    <img class="speaker-img" src="${speaker.imgSrc}" alt="">
  </div>
  <div class="speaker-info">
    <div class="speaker-name">
      ${speaker.name}
    </div>
    <p class="speaker-position">
      ${speaker.position}
    </p>
    <div class="speaker-info-line"></div>
    <p class="speaker-about">
      ${speaker.about}
    </p>
  </div>
</li>`;
  document.querySelector('.speaker-cards').insertAdjacentHTML('beforeend', speakerCard);
});
