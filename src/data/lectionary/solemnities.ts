import { LectionaryEntry } from "./types";

/**
 * Fixed-date solemnities and major feasts that may override
 * the regular Sunday or weekday cycle.
 *
 * These use a convention where:
 *   season = the solemnity name
 *   week = 0 (not applicable)
 *   dayOfWeek = 0 (treated as overrides)
 */
export const solemnities: LectionaryEntry[] = [
  // ==================== CHRISTMAS (December 25) ====================
  {
    season: "Christmas Day",
    week: 0,
    dayOfWeek: 0,
    title: "The Nativity of the Lord (Christmas) - Mass During the Day",
    readings: [
      { label: "First Reading", reference: "Isaiah 52:7-10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 98:1-6", intro: "All the ends of the earth have seen the saving power of God." },
      { label: "Second Reading", reference: "Hebrews 1:1-6", intro: "A reading from the Letter to the Hebrews" },
      { label: "Gospel", reference: "John 1:1-18", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Christmas Day",
    week: 0,
    dayOfWeek: 0,
    title: "The Nativity of the Lord (Christmas) - Mass at Midnight",
    readings: [
      { label: "First Reading", reference: "Isaiah 9:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 96:1-3,11-13", intro: "Today is born our Savior, Christ the Lord." },
      { label: "Second Reading", reference: "Titus 2:11-14", intro: "A reading from the Letter of Saint Paul to Titus" },
      { label: "Gospel", reference: "Luke 2:1-14", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Christmas Day",
    week: 0,
    dayOfWeek: 0,
    title: "The Nativity of the Lord (Christmas) - Mass at Dawn",
    readings: [
      { label: "First Reading", reference: "Isaiah 62:11-12", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 97:1,6,11-12", intro: "A light will shine on us this day: the Lord is born for us." },
      { label: "Second Reading", reference: "Titus 3:4-7", intro: "A reading from the Letter of Saint Paul to Titus" },
      { label: "Gospel", reference: "Luke 2:15-20", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== MARY, MOTHER OF GOD (January 1) ====================
  {
    season: "Mary Mother of God",
    week: 0,
    dayOfWeek: 0,
    title: "Solemnity of Mary, the Holy Mother of God",
    readings: [
      { label: "First Reading", reference: "Numbers 6:22-27", intro: "A reading from the Book of Numbers" },
      { label: "Responsorial Psalm", reference: "Psalm 67:2-3,5-6,8", intro: "May God bless us in his mercy." },
      { label: "Second Reading", reference: "Galatians 4:4-7", intro: "A reading from the Letter of Saint Paul to the Galatians" },
      { label: "Gospel", reference: "Luke 2:16-21", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== EPIPHANY (January 6) ====================
  {
    season: "Epiphany",
    week: 0,
    dayOfWeek: 0,
    title: "The Epiphany of the Lord",
    readings: [
      { label: "First Reading", reference: "Isaiah 60:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 72:1-2,7-8,10-13", intro: "Lord, every nation on earth will adore you." },
      { label: "Second Reading", reference: "Ephesians 3:2-3,5-6", intro: "A reading from the Letter of Saint Paul to the Ephesians" },
      { label: "Gospel", reference: "Matthew 2:1-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== PRESENTATION OF THE LORD (February 2) ====================
  {
    season: "Presentation of the Lord",
    week: 0,
    dayOfWeek: 0,
    title: "The Presentation of the Lord",
    readings: [
      { label: "First Reading", reference: "Malachi 3:1-4", intro: "A reading from the Book of the Prophet Malachi" },
      { label: "Responsorial Psalm", reference: "Psalm 24:7-10", intro: "Who is this king of glory? It is the Lord!" },
      { label: "Second Reading", reference: "Hebrews 2:14-18", intro: "A reading from the Letter to the Hebrews" },
      { label: "Gospel", reference: "Luke 2:22-40", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== SAINT JOSEPH (March 19) ====================
  {
    season: "Saint Joseph",
    week: 0,
    dayOfWeek: 0,
    title: "Solemnity of Saint Joseph, Spouse of the Blessed Virgin Mary",
    readings: [
      { label: "First Reading", reference: "2 Samuel 7:4-5,12-14,16", intro: "A reading from the second Book of Samuel" },
      { label: "Responsorial Psalm", reference: "Psalm 89:2-5,27,29", intro: "The son of David will live for ever." },
      { label: "Second Reading", reference: "Romans 4:13,16-18,22", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Matthew 1:16,18-21,24", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== ANNUNCIATION (March 25) ====================
  {
    season: "Annunciation",
    week: 0,
    dayOfWeek: 0,
    title: "The Annunciation of the Lord",
    readings: [
      { label: "First Reading", reference: "Isaiah 7:10-14,8:10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 40:7-11", intro: "Here am I, Lord; I come to do your will." },
      { label: "Second Reading", reference: "Hebrews 10:4-10", intro: "A reading from the Letter to the Hebrews" },
      { label: "Gospel", reference: "Luke 1:26-38", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== NATIVITY OF SAINT JOHN THE BAPTIST (June 24) ====================
  {
    season: "Nativity of John the Baptist",
    week: 0,
    dayOfWeek: 0,
    title: "The Nativity of Saint John the Baptist",
    readings: [
      { label: "First Reading", reference: "Isaiah 49:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 139:1-3,13-15", intro: "I praise you, for I am wonderfully made." },
      { label: "Second Reading", reference: "Acts 13:22-26", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "Luke 1:57-66,80", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== SAINTS PETER AND PAUL (June 29) ====================
  {
    season: "Saints Peter and Paul",
    week: 0,
    dayOfWeek: 0,
    title: "Solemnity of Saints Peter and Paul, Apostles",
    readings: [
      { label: "First Reading", reference: "Acts 12:1-11", intro: "A reading from the Acts of the Apostles" },
      { label: "Responsorial Psalm", reference: "Psalm 34:2-9", intro: "The angel of the Lord will rescue those who fear him." },
      { label: "Second Reading", reference: "2 Timothy 4:6-8,17-18", intro: "A reading from the second Letter of Saint Paul to Timothy" },
      { label: "Gospel", reference: "Matthew 16:13-19", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== TRANSFIGURATION (August 6) ====================
  {
    season: "Transfiguration",
    week: 0,
    dayOfWeek: 0,
    title: "The Transfiguration of the Lord",
    readings: [
      { label: "First Reading", reference: "Daniel 7:9-10,13-14", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Responsorial Psalm", reference: "Psalm 97:1-2,5-6,9", intro: "The Lord is king, the most high over all the earth." },
      { label: "Second Reading", reference: "2 Peter 1:16-19", intro: "A reading from the second Letter of Saint Peter" },
      { label: "Gospel", reference: "Matthew 17:1-9", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== ASSUMPTION (August 15) ====================
  {
    season: "Assumption",
    week: 0,
    dayOfWeek: 0,
    title: "The Assumption of the Blessed Virgin Mary",
    readings: [
      { label: "First Reading", reference: "Revelation 11:19,12:1-6,10", intro: "A reading from the Book of Revelation" },
      { label: "Responsorial Psalm", reference: "Psalm 45:10-12,16", intro: "The queen stands at your right hand, arrayed in gold." },
      { label: "Second Reading", reference: "1 Corinthians 15:20-27", intro: "A reading from the first Letter of Saint Paul to the Corinthians" },
      { label: "Gospel", reference: "Luke 1:39-56", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== TRIUMPH OF THE CROSS (September 14) ====================
  {
    season: "Triumph of the Cross",
    week: 0,
    dayOfWeek: 0,
    title: "The Exaltation of the Holy Cross",
    readings: [
      { label: "First Reading", reference: "Numbers 21:4-9", intro: "A reading from the Book of Numbers" },
      { label: "Responsorial Psalm", reference: "Psalm 78:1-2,34-38", intro: "Do not forget the works of the Lord!" },
      { label: "Second Reading", reference: "Philippians 2:6-11", intro: "A reading from the Letter of Saint Paul to the Philippians" },
      { label: "Gospel", reference: "John 3:13-17", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ==================== ALL SAINTS (November 1) ====================
  {
    season: "All Saints",
    week: 0,
    dayOfWeek: 0,
    title: "Solemnity of All Saints",
    readings: [
      { label: "First Reading", reference: "Revelation 7:2-4,9-14", intro: "A reading from the Book of Revelation" },
      { label: "Responsorial Psalm", reference: "Psalm 24:1-6", intro: "Lord, this is the people that longs to see your face." },
      { label: "Second Reading", reference: "1 John 3:1-3", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Matthew 5:1-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== ALL SOULS (November 2) ====================
  {
    season: "All Souls",
    week: 0,
    dayOfWeek: 0,
    title: "The Commemoration of All the Faithful Departed (All Souls Day)",
    readings: [
      { label: "First Reading", reference: "Isaiah 25:6-9", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 23:1-6", intro: "The Lord is my shepherd; there is nothing I shall want." },
      { label: "Second Reading", reference: "Romans 5:5-11", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "John 6:37-40", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ==================== IMMACULATE CONCEPTION (December 8) ====================
  {
    season: "Immaculate Conception",
    week: 0,
    dayOfWeek: 0,
    title: "The Immaculate Conception of the Blessed Virgin Mary",
    readings: [
      { label: "First Reading", reference: "Genesis 3:9-15,20", intro: "A reading from the Book of Genesis" },
      { label: "Responsorial Psalm", reference: "Psalm 98:1-4", intro: "Sing to the Lord a new song, for he has done marvelous deeds." },
      { label: "Second Reading", reference: "Ephesians 1:3-6,11-12", intro: "A reading from the Letter of Saint Paul to the Ephesians" },
      { label: "Gospel", reference: "Luke 1:26-38", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ==================== HOLY THURSDAY ====================
  {
    season: "Holy Thursday",
    week: 0,
    dayOfWeek: 0,
    title: "Thursday of the Lord's Supper (Holy Thursday)",
    readings: [
      { label: "First Reading", reference: "Exodus 12:1-8,11-14", intro: "A reading from the Book of Exodus" },
      { label: "Responsorial Psalm", reference: "Psalm 116:12-13,15-18", intro: "Our blessing-cup is a communion with the Blood of Christ." },
      { label: "Second Reading", reference: "1 Corinthians 11:23-26", intro: "A reading from the first Letter of Saint Paul to the Corinthians" },
      { label: "Gospel", reference: "John 13:1-15", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ==================== GOOD FRIDAY ====================
  {
    season: "Good Friday",
    week: 0,
    dayOfWeek: 0,
    title: "Friday of the Passion of the Lord (Good Friday)",
    readings: [
      { label: "First Reading", reference: "Isaiah 52:13-53:12", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Responsorial Psalm", reference: "Psalm 31:2,6,12-13,15-17,25", intro: "Father, into your hands I commend my spirit." },
      { label: "Second Reading", reference: "Hebrews 4:14-16,5:7-9", intro: "A reading from the Letter to the Hebrews" },
      { label: "Gospel", reference: "John 18:1-19:42", intro: "The Passion of our Lord Jesus Christ according to John" },
    ],
  },

  // ==================== EASTER VIGIL ====================
  {
    season: "Easter Vigil",
    week: 0,
    dayOfWeek: 0,
    title: "The Easter Vigil in the Holy Night",
    readings: [
      { label: "First Reading", reference: "Genesis 1:1-2:2", intro: "A reading from the Book of Genesis" },
      { label: "Responsorial Psalm", reference: "Psalm 104:1-2,5-6,10,12-14,24,35", intro: "Lord, send out your Spirit, and renew the face of the earth." },
      { label: "Second Reading", reference: "Romans 6:3-11", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Matthew 28:1-10", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ==================== SACRED HEART ====================
  {
    season: "Sacred Heart",
    week: 0,
    dayOfWeek: 0,
    title: "The Most Sacred Heart of Jesus",
    readings: [
      { label: "First Reading", reference: "Deuteronomy 7:6-11", intro: "A reading from the Book of Deuteronomy" },
      { label: "Responsorial Psalm", reference: "Psalm 103:1-4,6-8,10", intro: "The Lord's kindness is everlasting to those who fear him." },
      { label: "Second Reading", reference: "1 John 4:7-16", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Matthew 11:25-30", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
];
