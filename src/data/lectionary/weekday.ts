import { LectionaryEntry } from "./types";

/**
 * Weekday commons -- simplified weekday readings shared across all 3 liturgical cycles.
 * Each weekday entry has 2 readings: First Reading + Gospel.
 * dayOfWeek: 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday
 *
 * NOTE: Only books from the Protestant canon are used (no Tobit, Wisdom, Sirach,
 * Baruch, Judith, or 1/2 Maccabees).
 */
export const weekdayReadings: LectionaryEntry[] = [
  // ====================================================================
  //  ADVENT — Week 1 (Mon-Sat)
  // ====================================================================
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 1,
    title: "Monday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 2:1-5", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 8:5-11", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 2,
    title: "Tuesday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 11:1-10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 10:21-24", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 3,
    title: "Wednesday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 25:6-10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 15:29-37", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 4,
    title: "Thursday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 26:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 7:21,24-27", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 5,
    title: "Friday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 29:17-24", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 9:27-31", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 1,
    dayOfWeek: 6,
    title: "Saturday of the First Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 30:19-21,23-26", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 9:35-10:1,5-8", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  ADVENT — Week 2 (Mon-Sat)
  // ====================================================================
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 1,
    title: "Monday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 35:1-10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 5:17-26", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 2,
    title: "Tuesday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 40:1-11", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 18:12-14", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 3,
    title: "Wednesday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 40:25-31", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 11:28-30", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 4,
    title: "Thursday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 41:13-20", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 11:11-15", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 5,
    title: "Friday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 48:17-19", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 11:16-19", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 2,
    dayOfWeek: 6,
    title: "Saturday of the Second Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 48:1-4,9-11", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 17:10-13", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  ADVENT — Week 3 (Mon-Sat)
  // ====================================================================
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 1,
    title: "Monday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Numbers 24:2-7,15-17", intro: "A reading from the Book of Numbers" },
      { label: "Gospel", reference: "Matthew 21:23-27", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 2,
    title: "Tuesday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Zephaniah 3:1-2,9-13", intro: "A reading from the Book of the Prophet Zephaniah" },
      { label: "Gospel", reference: "Matthew 21:28-32", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 3,
    title: "Wednesday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 45:6-8,18,21-25", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 7:19-23", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 4,
    title: "Thursday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 54:1-10", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 7:24-30", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 5,
    title: "Friday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 56:1-3,6-8", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 5:33-36", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Advent",
    week: 3,
    dayOfWeek: 6,
    title: "Saturday of the Third Week of Advent",
    readings: [
      { label: "First Reading", reference: "Genesis 49:2,8-10", intro: "A reading from the Book of Genesis" },
      { label: "Gospel", reference: "Matthew 1:1-17", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  ADVENT — Week 4 (Mon-Sat)
  // ====================================================================
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 1,
    title: "Monday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 7:10-14", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 1:26-38", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 2,
    title: "Tuesday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "Micah 5:1-4", intro: "A reading from the Book of the Prophet Micah" },
      { label: "Gospel", reference: "Luke 1:39-45", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 3,
    title: "Wednesday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 49:8-15", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 1:46-56", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 4,
    title: "Thursday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "Malachi 3:1-4,23-24", intro: "A reading from the Book of the Prophet Malachi" },
      { label: "Gospel", reference: "Luke 1:57-66", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 5,
    title: "Friday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "2 Samuel 7:1-5,8-12,14,16", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Luke 1:67-79", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Advent",
    week: 4,
    dayOfWeek: 6,
    title: "Saturday of the Fourth Week of Advent",
    readings: [
      { label: "First Reading", reference: "Isaiah 9:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Luke 2:1-14", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ====================================================================
  //  CHRISTMAS — Weekdays
  // ====================================================================
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 1,
    title: "Monday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 1:1-4", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Matthew 10:17-22", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 2,
    title: "Tuesday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 1:5-2:2", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Matthew 2:13-18", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 3,
    title: "Wednesday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 2:3-11", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Luke 2:22-35", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 4,
    title: "Thursday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 2:12-17", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Luke 2:36-40", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 5,
    title: "Friday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 2:18-21", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "John 1:1-18", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Christmas",
    week: 1,
    dayOfWeek: 6,
    title: "Saturday within the Octave of the Nativity",
    readings: [
      { label: "First Reading", reference: "1 John 2:22-28", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "John 1:19-28", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 1,
    title: "Monday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 3:22-4:6", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Matthew 4:12-17,23-25", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 2,
    title: "Tuesday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 4:7-10", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Mark 6:34-44", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 3,
    title: "Wednesday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 4:11-18", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Mark 6:45-52", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 4,
    title: "Thursday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 4:19-5:4", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Luke 4:14-22", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 5,
    title: "Friday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 5:5-13", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "Luke 5:12-16", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Christmas",
    week: 2,
    dayOfWeek: 6,
    title: "Saturday after Epiphany",
    readings: [
      { label: "First Reading", reference: "1 John 5:14-21", intro: "A reading from the first Letter of Saint John" },
      { label: "Gospel", reference: "John 3:22-30", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  LENT — Week 1 (Mon-Sat)
  // ====================================================================
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 1,
    title: "Monday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Leviticus 19:1-2,11-18", intro: "A reading from the Book of Leviticus" },
      { label: "Gospel", reference: "Matthew 25:31-46", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 2,
    title: "Tuesday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Isaiah 55:10-11", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 6:7-15", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 3,
    title: "Wednesday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jonah 3:1-10", intro: "A reading from the Book of the Prophet Jonah" },
      { label: "Gospel", reference: "Luke 11:29-32", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 4,
    title: "Thursday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Esther 4:17", intro: "A reading from the Book of Esther" },
      { label: "Gospel", reference: "Matthew 7:7-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 5,
    title: "Friday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Ezekiel 18:21-28", intro: "A reading from the Book of the Prophet Ezekiel" },
      { label: "Gospel", reference: "Matthew 5:20-26", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 1,
    dayOfWeek: 6,
    title: "Saturday of the First Week of Lent",
    readings: [
      { label: "First Reading", reference: "Deuteronomy 26:16-19", intro: "A reading from the Book of Deuteronomy" },
      { label: "Gospel", reference: "Matthew 5:43-48", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  LENT — Week 2 (Mon-Sat)
  // ====================================================================
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 1,
    title: "Monday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Daniel 9:4-10", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 6:36-38", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 2,
    title: "Tuesday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Isaiah 1:10,16-20", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 23:1-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 3,
    title: "Wednesday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jeremiah 18:18-20", intro: "A reading from the Book of the Prophet Jeremiah" },
      { label: "Gospel", reference: "Matthew 20:17-28", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 4,
    title: "Thursday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jeremiah 17:5-10", intro: "A reading from the Book of the Prophet Jeremiah" },
      { label: "Gospel", reference: "Luke 16:19-31", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 5,
    title: "Friday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Genesis 37:3-4,12-13,17-28", intro: "A reading from the Book of Genesis" },
      { label: "Gospel", reference: "Matthew 21:33-43,45-46", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 2,
    dayOfWeek: 6,
    title: "Saturday of the Second Week of Lent",
    readings: [
      { label: "First Reading", reference: "Micah 7:14-15,18-20", intro: "A reading from the Book of the Prophet Micah" },
      { label: "Gospel", reference: "Luke 15:1-3,11-32", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ====================================================================
  //  LENT — Week 3 (Mon-Sat)
  // ====================================================================
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 1,
    title: "Monday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "2 Kings 5:1-15", intro: "A reading from the second Book of Kings" },
      { label: "Gospel", reference: "Luke 4:24-30", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 2,
    title: "Tuesday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "Daniel 3:25,34-43", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Matthew 18:21-35", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 3,
    title: "Wednesday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "Deuteronomy 4:1,5-9", intro: "A reading from the Book of Deuteronomy" },
      { label: "Gospel", reference: "Matthew 5:17-19", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 4,
    title: "Thursday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jeremiah 7:23-28", intro: "A reading from the Book of the Prophet Jeremiah" },
      { label: "Gospel", reference: "Luke 11:14-23", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 5,
    title: "Friday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "Hosea 14:2-10", intro: "A reading from the Book of the Prophet Hosea" },
      { label: "Gospel", reference: "Mark 12:28-34", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Lent",
    week: 3,
    dayOfWeek: 6,
    title: "Saturday of the Third Week of Lent",
    readings: [
      { label: "First Reading", reference: "Hosea 6:1-6", intro: "A reading from the Book of the Prophet Hosea" },
      { label: "Gospel", reference: "Luke 18:9-14", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // ====================================================================
  //  LENT — Week 4 (Mon-Sat)
  // ====================================================================
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 1,
    title: "Monday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Isaiah 65:17-21", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 4:43-54", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 2,
    title: "Tuesday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Ezekiel 47:1-9,12", intro: "A reading from the Book of the Prophet Ezekiel" },
      { label: "Gospel", reference: "John 5:1-16", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 3,
    title: "Wednesday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Isaiah 49:8-15", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 5:17-30", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 4,
    title: "Thursday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Exodus 32:7-14", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "John 5:31-47", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 5,
    title: "Friday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Isaiah 53:1-8", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 7:1-2,10,25-30", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 4,
    dayOfWeek: 6,
    title: "Saturday of the Fourth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jeremiah 11:18-20", intro: "A reading from the Book of the Prophet Jeremiah" },
      { label: "Gospel", reference: "John 7:40-53", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  LENT — Week 5 (Mon-Sat)
  // ====================================================================
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 1,
    title: "Monday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Daniel 13:1-9,15-17,19-30,33-62", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "John 8:1-11", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 2,
    title: "Tuesday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Numbers 21:4-9", intro: "A reading from the Book of Numbers" },
      { label: "Gospel", reference: "John 8:21-30", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 3,
    title: "Wednesday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Daniel 3:14-20,91-92,95", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "John 8:31-42", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 4,
    title: "Thursday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Genesis 17:3-9", intro: "A reading from the Book of Genesis" },
      { label: "Gospel", reference: "John 8:51-59", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 5,
    title: "Friday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Jeremiah 20:10-13", intro: "A reading from the Book of the Prophet Jeremiah" },
      { label: "Gospel", reference: "John 10:31-42", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Lent",
    week: 5,
    dayOfWeek: 6,
    title: "Saturday of the Fifth Week of Lent",
    readings: [
      { label: "First Reading", reference: "Ezekiel 37:21-28", intro: "A reading from the Book of the Prophet Ezekiel" },
      { label: "Gospel", reference: "John 11:45-56", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  HOLY WEEK (Mon-Sat of Week 6 of Lent)
  // ====================================================================
  {
    season: "Holy Week",
    week: 6,
    dayOfWeek: 1,
    title: "Monday of Holy Week",
    readings: [
      { label: "First Reading", reference: "Isaiah 42:1-7", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 12:1-11", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Holy Week",
    week: 6,
    dayOfWeek: 2,
    title: "Tuesday of Holy Week",
    readings: [
      { label: "First Reading", reference: "Isaiah 49:1-6", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "John 13:21-33,36-38", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Holy Week",
    week: 6,
    dayOfWeek: 3,
    title: "Wednesday of Holy Week",
    readings: [
      { label: "First Reading", reference: "Isaiah 50:4-9", intro: "A reading from the Book of the Prophet Isaiah" },
      { label: "Gospel", reference: "Matthew 26:14-25", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Holy Week",
    week: 6,
    dayOfWeek: 6,
    title: "Holy Saturday (Easter Vigil anticipated)",
    readings: [
      { label: "First Reading", reference: "Genesis 1:1-2:2", intro: "A reading from the Book of Genesis" },
      { label: "Gospel", reference: "Matthew 28:1-10", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 1 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 1,
    title: "Monday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 2:14,22-33", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "Matthew 28:8-15", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 2,
    title: "Tuesday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 2:36-41", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 20:11-18", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 3,
    title: "Wednesday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 3:1-10", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "Luke 24:13-35", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 4,
    title: "Thursday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 3:11-26", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "Luke 24:35-48", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 5,
    title: "Friday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 4:1-12", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 21:1-14", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 1,
    dayOfWeek: 6,
    title: "Saturday within the Octave of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 4:13-21", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "Mark 16:9-15", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 2 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 1,
    title: "Monday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 4:23-31", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 3:1-8", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 2,
    title: "Tuesday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 4:32-37", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 3:7-15", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 3,
    title: "Wednesday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 5:17-26", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 3:16-21", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 4,
    title: "Thursday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 5:27-33", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 3:31-36", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 5,
    title: "Friday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 5:34-42", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:1-15", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 2,
    dayOfWeek: 6,
    title: "Saturday of the Second Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 6:1-7", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:16-21", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 3 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 1,
    title: "Monday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 6:8-15", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:22-29", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 2,
    title: "Tuesday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 7:51-8:1", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:30-35", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 3,
    title: "Wednesday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 8:1-8", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:35-40", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 4,
    title: "Thursday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 8:26-40", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:44-51", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 5,
    title: "Friday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 9:1-20", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:52-59", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 3,
    dayOfWeek: 6,
    title: "Saturday of the Third Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 9:31-42", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 6:60-69", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 4 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 1,
    title: "Monday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 11:1-18", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 10:1-10", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 2,
    title: "Tuesday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 11:19-26", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 10:22-30", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 3,
    title: "Wednesday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 12:24-13:5", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 12:44-50", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 4,
    title: "Thursday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 13:13-25", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 13:16-20", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 5,
    title: "Friday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 13:26-33", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 14:1-6", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 4,
    dayOfWeek: 6,
    title: "Saturday of the Fourth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 13:44-52", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 14:7-14", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 5 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 1,
    title: "Monday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 14:5-18", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 14:21-26", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 2,
    title: "Tuesday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 14:19-28", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 14:27-31", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 3,
    title: "Wednesday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 15:1-6", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 15:1-8", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 4,
    title: "Thursday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 15:7-21", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 15:9-11", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 5,
    title: "Friday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 15:22-31", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 15:12-17", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 5,
    dayOfWeek: 6,
    title: "Saturday of the Fifth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 16:1-10", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 15:18-21", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 6 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 1,
    title: "Monday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 16:11-15", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 15:26-16:4", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 2,
    title: "Tuesday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 16:22-34", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:5-11", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 3,
    title: "Wednesday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 17:15,22-18:1", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:12-15", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 4,
    title: "Thursday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 18:1-8", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:16-20", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 5,
    title: "Friday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 18:9-18", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:20-23", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 6,
    dayOfWeek: 6,
    title: "Saturday of the Sixth Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 18:23-28", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:23-28", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  EASTER — Week 7 (Mon-Sat)
  // ====================================================================
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 1,
    title: "Monday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 19:1-8", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 16:29-33", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 2,
    title: "Tuesday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 20:17-27", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 17:1-11", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 3,
    title: "Wednesday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 20:28-38", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 17:11-19", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 4,
    title: "Thursday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 22:30,23:6-11", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 17:20-26", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 5,
    title: "Friday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 25:13-21", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 21:15-19", intro: "A reading from the holy Gospel according to John" },
    ],
  },
  {
    season: "Easter",
    week: 7,
    dayOfWeek: 6,
    title: "Saturday of the Seventh Week of Easter",
    readings: [
      { label: "First Reading", reference: "Acts 28:16-20,30-31", intro: "A reading from the Acts of the Apostles" },
      { label: "Gospel", reference: "John 21:20-25", intro: "A reading from the holy Gospel according to John" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 1 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 1,
    title: "Monday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 1:1-8", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 1:14-20", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 2,
    title: "Tuesday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 1:9-20", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 1:21-28", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 3,
    title: "Wednesday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 3:1-10,19-20", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 1:29-39", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 4,
    title: "Thursday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 4:1-11", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 1:40-45", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 5,
    title: "Friday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 8:4-7,10-22", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 2:1-12", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 1,
    dayOfWeek: 6,
    title: "Saturday of the First Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 9:1-4,17-19,10:1", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 2:13-17", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 2 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 1,
    title: "Monday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 15:16-23", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 2:18-22", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 2,
    title: "Tuesday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 16:1-13", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 2:23-28", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 3,
    title: "Wednesday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 17:32-33,37,40-51", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:1-6", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 4,
    title: "Thursday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 18:6-9,19:1-7", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:7-12", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 5,
    title: "Friday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Samuel 24:3-21", intro: "A reading from the first Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:13-19", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 2,
    dayOfWeek: 6,
    title: "Saturday of the Second Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 1:1-4,11-12,19,23-27", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:20-21", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 3 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 1,
    title: "Monday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 5:1-7,10", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:22-30", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 2,
    title: "Tuesday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 6:12-15,17-19", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 3:31-35", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 3,
    title: "Wednesday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 7:4-17", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 4:1-20", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 4,
    title: "Thursday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 7:18-19,24-29", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 4:21-25", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 5,
    title: "Friday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 11:1-4,5-10,13-17", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 4:26-34", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 3,
    dayOfWeek: 6,
    title: "Saturday of the Third Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 12:1-7,10-17", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 4:35-41", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 4 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 1,
    title: "Monday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 15:13-14,30,16:5-13", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 5:1-20", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 2,
    title: "Tuesday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 18:9-10,14,24-25,30-19:3", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 5:21-43", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 3,
    title: "Wednesday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Samuel 24:2,9-17", intro: "A reading from the second Book of Samuel" },
      { label: "Gospel", reference: "Mark 6:1-6", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 4,
    title: "Thursday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 2:1-4,10-12", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 6:7-13", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 5,
    title: "Friday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 3:4-13", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 6:14-29", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 4,
    dayOfWeek: 6,
    title: "Saturday of the Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 3:16-28", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 6:30-34", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 5 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 1,
    title: "Monday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 8:1-7,9-13", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 6:53-56", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 2,
    title: "Tuesday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 8:22-23,27-30", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 7:1-13", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 3,
    title: "Wednesday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 10:1-10", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 7:14-23", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 4,
    title: "Thursday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 11:4-13", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 7:24-30", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 5,
    title: "Friday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 11:29-32,12:19", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 7:31-37", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 5,
    dayOfWeek: 6,
    title: "Saturday of the Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 12:26-32,13:33-34", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Mark 8:1-10", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 6 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 1,
    title: "Monday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 1:1-11", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 8:11-13", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 2,
    title: "Tuesday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 1:12-18", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 8:14-21", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 3,
    title: "Wednesday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 1:19-27", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 8:22-26", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 4,
    title: "Thursday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 2:1-9", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 8:27-33", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 5,
    title: "Friday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 2:14-24,26", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 8:34-9:1", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 6,
    dayOfWeek: 6,
    title: "Saturday of the Sixth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 3:1-10", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 9:2-13", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 7 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 1,
    title: "Monday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 3:13-18", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 9:14-29", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 2,
    title: "Tuesday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 4:1-10", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 9:30-37", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 3,
    title: "Wednesday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 4:13-17", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 9:38-40", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 4,
    title: "Thursday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 5:1-6", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 9:41-50", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 5,
    title: "Friday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 5:9-12", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 10:1-12", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 7,
    dayOfWeek: 6,
    title: "Saturday of the Seventh Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "James 5:13-20", intro: "A reading from the Letter of Saint James" },
      { label: "Gospel", reference: "Mark 10:13-16", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 8 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 1,
    title: "Monday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Peter 1:3-9", intro: "A reading from the first Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 10:17-27", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 2,
    title: "Tuesday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Peter 1:10-16", intro: "A reading from the first Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 10:28-31", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 3,
    title: "Wednesday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Peter 1:18-25", intro: "A reading from the first Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 10:32-45", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 4,
    title: "Thursday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Peter 2:2-5,9-12", intro: "A reading from the first Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 10:46-52", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 5,
    title: "Friday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Peter 4:7-13", intro: "A reading from the first Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 11:11-26", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 8,
    dayOfWeek: 6,
    title: "Saturday of the Eighth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Jude 1:17,20-25", intro: "A reading from the Letter of Saint Jude" },
      { label: "Gospel", reference: "Mark 11:27-33", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 9 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 1,
    title: "Monday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Peter 1:2-7", intro: "A reading from the second Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 12:1-12", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 2,
    title: "Tuesday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Peter 3:12-15,17-18", intro: "A reading from the second Letter of Saint Peter" },
      { label: "Gospel", reference: "Mark 12:13-17", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 3,
    title: "Wednesday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Timothy 1:1-3,6-12", intro: "A reading from the second Letter of Saint Paul to Timothy" },
      { label: "Gospel", reference: "Mark 12:18-27", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 4,
    title: "Thursday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Timothy 2:8-15", intro: "A reading from the second Letter of Saint Paul to Timothy" },
      { label: "Gospel", reference: "Mark 12:28-34", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 5,
    title: "Friday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Timothy 3:10-17", intro: "A reading from the second Letter of Saint Paul to Timothy" },
      { label: "Gospel", reference: "Mark 12:35-37", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 9,
    dayOfWeek: 6,
    title: "Saturday of the Ninth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "2 Timothy 4:1-8", intro: "A reading from the second Letter of Saint Paul to Timothy" },
      { label: "Gospel", reference: "Mark 12:38-44", intro: "A reading from the holy Gospel according to Mark" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Week 10 (Mon-Sat)
  // ====================================================================
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 1,
    title: "Monday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 17:1-6", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:1-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 2,
    title: "Tuesday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 17:7-16", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:13-16", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 3,
    title: "Wednesday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 18:20-39", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:17-19", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 4,
    title: "Thursday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 18:41-46", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:20-26", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 5,
    title: "Friday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 19:1-8", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:27-32", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 10,
    dayOfWeek: 6,
    title: "Saturday of the Tenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "1 Kings 19:19-21", intro: "A reading from the first Book of Kings" },
      { label: "Gospel", reference: "Matthew 5:33-37", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // ====================================================================
  //  ORDINARY TIME — Representative Weeks 15, 20, 25, 30, 34
  //  These provide coverage across the rest of the liturgical year.
  // ====================================================================

  // --- Week 15 (Mon-Sat) ---
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 1,
    title: "Monday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 1:8-14,22", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 10:34-11:1", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 2,
    title: "Tuesday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 2:1-15", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 11:20-24", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 3,
    title: "Wednesday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 3:1-6,9-12", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 11:25-27", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 4,
    title: "Thursday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 3:13-20", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 11:28-30", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 5,
    title: "Friday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 11:10-12:14", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 12:1-8", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 15,
    dayOfWeek: 6,
    title: "Saturday of the Fifteenth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Exodus 12:37-42", intro: "A reading from the Book of Exodus" },
      { label: "Gospel", reference: "Matthew 12:14-21", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // --- Week 20 (Mon-Sat) ---
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 1,
    title: "Monday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Judges 2:11-19", intro: "A reading from the Book of Judges" },
      { label: "Gospel", reference: "Matthew 19:16-22", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 2,
    title: "Tuesday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Judges 6:11-24", intro: "A reading from the Book of Judges" },
      { label: "Gospel", reference: "Matthew 19:23-30", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 3,
    title: "Wednesday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Judges 9:6-15", intro: "A reading from the Book of Judges" },
      { label: "Gospel", reference: "Matthew 20:1-16", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 4,
    title: "Thursday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Judges 11:29-39", intro: "A reading from the Book of Judges" },
      { label: "Gospel", reference: "Matthew 22:1-14", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 5,
    title: "Friday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Ruth 1:1,3-6,14-16,22", intro: "A reading from the Book of Ruth" },
      { label: "Gospel", reference: "Matthew 22:34-40", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 20,
    dayOfWeek: 6,
    title: "Saturday of the Twentieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Ruth 2:1-3,8-11,4:13-17", intro: "A reading from the Book of Ruth" },
      { label: "Gospel", reference: "Matthew 23:1-12", intro: "A reading from the holy Gospel according to Matthew" },
    ],
  },

  // --- Week 25 (Mon-Sat) ---
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 1,
    title: "Monday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Ezra 1:1-6", intro: "A reading from the Book of Ezra" },
      { label: "Gospel", reference: "Luke 8:16-18", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 2,
    title: "Tuesday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Ezra 6:7-8,12,14-20", intro: "A reading from the Book of Ezra" },
      { label: "Gospel", reference: "Luke 8:19-21", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 3,
    title: "Wednesday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Ezra 9:5-9", intro: "A reading from the Book of Ezra" },
      { label: "Gospel", reference: "Luke 9:1-6", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 4,
    title: "Thursday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Haggai 1:1-8", intro: "A reading from the Book of the Prophet Haggai" },
      { label: "Gospel", reference: "Luke 9:7-9", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 5,
    title: "Friday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Haggai 2:1-9", intro: "A reading from the Book of the Prophet Haggai" },
      { label: "Gospel", reference: "Luke 9:18-22", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 25,
    dayOfWeek: 6,
    title: "Saturday of the Twenty-Fifth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Zechariah 2:5-9,14-15", intro: "A reading from the Book of the Prophet Zechariah" },
      { label: "Gospel", reference: "Luke 9:43-45", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // --- Week 30 (Mon-Sat) ---
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 1,
    title: "Monday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 8:12-17", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 13:10-17", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 2,
    title: "Tuesday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 8:18-25", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 13:18-21", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 3,
    title: "Wednesday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 8:26-30", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 13:22-30", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 4,
    title: "Thursday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 8:31-39", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 13:31-35", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 5,
    title: "Friday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 9:1-5", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 14:1-6", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 30,
    dayOfWeek: 6,
    title: "Saturday of the Thirtieth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Romans 11:1-2,11-12,25-29", intro: "A reading from the Letter of Saint Paul to the Romans" },
      { label: "Gospel", reference: "Luke 14:1,7-11", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },

  // --- Week 34 (Mon-Sat) ---
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 1,
    title: "Monday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 1:1-6,8-20", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:1-4", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 2,
    title: "Tuesday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 2:31-45", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:5-11", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 3,
    title: "Wednesday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 5:1-6,13-14,16-17,23-28", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:12-19", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 4,
    title: "Thursday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 6:12-28", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:20-28", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 5,
    title: "Friday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 7:2-14", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:29-33", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
  {
    season: "Ordinary Time",
    week: 34,
    dayOfWeek: 6,
    title: "Saturday of the Thirty-Fourth Week in Ordinary Time",
    readings: [
      { label: "First Reading", reference: "Daniel 7:15-27", intro: "A reading from the Book of the Prophet Daniel" },
      { label: "Gospel", reference: "Luke 21:34-36", intro: "A reading from the holy Gospel according to Luke" },
    ],
  },
];
