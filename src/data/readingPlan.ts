import { DailyReading } from "../lib/types";

/**
 * 365-Day Bible Reading Plan
 *
 * OT track:  Genesis through Malachi (~929 chapters, ~2-3 per day)
 * Psalm track: Psalm 1-150 cycling (Psalm 119 split into two days = 151 readings per cycle)
 * NT track:  Matthew through Revelation (~260 chapters, 1 per day, then loops back)
 *
 * All references formatted for bible-api.com (full book names, no abbreviations).
 */
export const readingPlan: DailyReading[] = [
  // ===== Genesis (50 chapters) — Days 1-20 =====
  { ot: "Genesis 1-2", psalm: "Psalm 1", nt: "Matthew 1" },
  { ot: "Genesis 3-4", psalm: "Psalm 2", nt: "Matthew 2" },
  { ot: "Genesis 5-7", psalm: "Psalm 3", nt: "Matthew 3" },
  { ot: "Genesis 8-10", psalm: "Psalm 4", nt: "Matthew 4" },
  { ot: "Genesis 11-13", psalm: "Psalm 5", nt: "Matthew 5" },
  { ot: "Genesis 14-16", psalm: "Psalm 6", nt: "Matthew 6" },
  { ot: "Genesis 17-18", psalm: "Psalm 7", nt: "Matthew 7" },
  { ot: "Genesis 19-20", psalm: "Psalm 8", nt: "Matthew 8" },
  { ot: "Genesis 21-23", psalm: "Psalm 9", nt: "Matthew 9" },
  { ot: "Genesis 24-25", psalm: "Psalm 10", nt: "Matthew 10" },
  { ot: "Genesis 26-27", psalm: "Psalm 11", nt: "Matthew 11" },
  { ot: "Genesis 28-29", psalm: "Psalm 12", nt: "Matthew 12" },
  { ot: "Genesis 30-31", psalm: "Psalm 13", nt: "Matthew 13" },
  { ot: "Genesis 32-33", psalm: "Psalm 14", nt: "Matthew 14" },
  { ot: "Genesis 34-35", psalm: "Psalm 15", nt: "Matthew 15" },
  { ot: "Genesis 36-37", psalm: "Psalm 16", nt: "Matthew 16" },
  { ot: "Genesis 38-40", psalm: "Psalm 17", nt: "Matthew 17" },
  { ot: "Genesis 41-42", psalm: "Psalm 18", nt: "Matthew 18" },
  { ot: "Genesis 43-45", psalm: "Psalm 19", nt: "Matthew 19" },
  { ot: "Genesis 46-50", psalm: "Psalm 20", nt: "Matthew 20" },

  // ===== Exodus (40 chapters) — Days 21-35 =====
  { ot: "Exodus 1-3", psalm: "Psalm 21", nt: "Matthew 21" },
  { ot: "Exodus 4-6", psalm: "Psalm 22", nt: "Matthew 22" },
  { ot: "Exodus 7-8", psalm: "Psalm 23", nt: "Matthew 23" },
  { ot: "Exodus 9-10", psalm: "Psalm 24", nt: "Matthew 24" },
  { ot: "Exodus 11-12", psalm: "Psalm 25", nt: "Matthew 25" },
  { ot: "Exodus 13-15", psalm: "Psalm 26", nt: "Matthew 26" },
  { ot: "Exodus 16-18", psalm: "Psalm 27", nt: "Matthew 27" },
  { ot: "Exodus 19-20", psalm: "Psalm 28", nt: "Matthew 28" },
  { ot: "Exodus 21-23", psalm: "Psalm 29", nt: "Mark 1" },
  { ot: "Exodus 24-26", psalm: "Psalm 30", nt: "Mark 2" },
  { ot: "Exodus 27-28", psalm: "Psalm 31", nt: "Mark 3" },
  { ot: "Exodus 29-30", psalm: "Psalm 32", nt: "Mark 4" },
  { ot: "Exodus 31-33", psalm: "Psalm 33", nt: "Mark 5" },
  { ot: "Exodus 34-36", psalm: "Psalm 34", nt: "Mark 6" },
  { ot: "Exodus 37-40", psalm: "Psalm 35", nt: "Mark 7" },

  // ===== Leviticus (27 chapters) — Days 36-45 =====
  { ot: "Leviticus 1-3", psalm: "Psalm 36", nt: "Mark 8" },
  { ot: "Leviticus 4-5", psalm: "Psalm 37", nt: "Mark 9" },
  { ot: "Leviticus 6-7", psalm: "Psalm 38", nt: "Mark 10" },
  { ot: "Leviticus 8-10", psalm: "Psalm 39", nt: "Mark 11" },
  { ot: "Leviticus 11-12", psalm: "Psalm 40", nt: "Mark 12" },
  { ot: "Leviticus 13-14", psalm: "Psalm 41", nt: "Mark 13" },
  { ot: "Leviticus 15-17", psalm: "Psalm 42", nt: "Mark 14" },
  { ot: "Leviticus 18-20", psalm: "Psalm 43", nt: "Mark 15" },
  { ot: "Leviticus 21-23", psalm: "Psalm 44", nt: "Mark 16" },
  { ot: "Leviticus 24-27", psalm: "Psalm 45", nt: "Luke 1" },

  // ===== Numbers (36 chapters) — Days 46-59 =====
  { ot: "Numbers 1-2", psalm: "Psalm 46", nt: "Luke 2" },
  { ot: "Numbers 3-4", psalm: "Psalm 47", nt: "Luke 3" },
  { ot: "Numbers 5-6", psalm: "Psalm 48", nt: "Luke 4" },
  { ot: "Numbers 7-8", psalm: "Psalm 49", nt: "Luke 5" },
  { ot: "Numbers 9-10", psalm: "Psalm 50", nt: "Luke 6" },
  { ot: "Numbers 11-13", psalm: "Psalm 51", nt: "Luke 7" },
  { ot: "Numbers 14-15", psalm: "Psalm 52", nt: "Luke 8" },
  { ot: "Numbers 16-18", psalm: "Psalm 53", nt: "Luke 9" },
  { ot: "Numbers 19-21", psalm: "Psalm 54", nt: "Luke 10" },
  { ot: "Numbers 22-24", psalm: "Psalm 55", nt: "Luke 11" },
  { ot: "Numbers 25-26", psalm: "Psalm 56", nt: "Luke 12" },
  { ot: "Numbers 27-29", psalm: "Psalm 57", nt: "Luke 13" },
  { ot: "Numbers 30-32", psalm: "Psalm 58", nt: "Luke 14" },
  { ot: "Numbers 33-36", psalm: "Psalm 59", nt: "Luke 15" },

  // ===== Deuteronomy (34 chapters) — Days 60-72 =====
  { ot: "Deuteronomy 1-2", psalm: "Psalm 60", nt: "Luke 16" },
  { ot: "Deuteronomy 3-4", psalm: "Psalm 61", nt: "Luke 17" },
  { ot: "Deuteronomy 5-7", psalm: "Psalm 62", nt: "Luke 18" },
  { ot: "Deuteronomy 8-10", psalm: "Psalm 63", nt: "Luke 19" },
  { ot: "Deuteronomy 11-13", psalm: "Psalm 64", nt: "Luke 20" },
  { ot: "Deuteronomy 14-16", psalm: "Psalm 65", nt: "Luke 21" },
  { ot: "Deuteronomy 17-19", psalm: "Psalm 66", nt: "Luke 22" },
  { ot: "Deuteronomy 20-22", psalm: "Psalm 67", nt: "Luke 23" },
  { ot: "Deuteronomy 23-25", psalm: "Psalm 68", nt: "Luke 24" },
  { ot: "Deuteronomy 26-27", psalm: "Psalm 69", nt: "John 1" },
  { ot: "Deuteronomy 28-29", psalm: "Psalm 70", nt: "John 2" },
  { ot: "Deuteronomy 30-31", psalm: "Psalm 71", nt: "John 3" },
  { ot: "Deuteronomy 32-34", psalm: "Psalm 72", nt: "John 4" },

  // ===== Joshua (24 chapters) — Days 73-81 =====
  { ot: "Joshua 1-3", psalm: "Psalm 73", nt: "John 5" },
  { ot: "Joshua 4-6", psalm: "Psalm 74", nt: "John 6" },
  { ot: "Joshua 7-8", psalm: "Psalm 75", nt: "John 7" },
  { ot: "Joshua 9-10", psalm: "Psalm 76", nt: "John 8" },
  { ot: "Joshua 11-13", psalm: "Psalm 77", nt: "John 9" },
  { ot: "Joshua 14-16", psalm: "Psalm 78", nt: "John 10" },
  { ot: "Joshua 17-19", psalm: "Psalm 79", nt: "John 11" },
  { ot: "Joshua 20-22", psalm: "Psalm 80", nt: "John 12" },
  { ot: "Joshua 23-24", psalm: "Psalm 81", nt: "John 13" },

  // ===== Judges (21 chapters) — Days 82-89 =====
  { ot: "Judges 1-3", psalm: "Psalm 82", nt: "John 14" },
  { ot: "Judges 4-5", psalm: "Psalm 83", nt: "John 15" },
  { ot: "Judges 6-7", psalm: "Psalm 84", nt: "John 16" },
  { ot: "Judges 8-9", psalm: "Psalm 85", nt: "John 17" },
  { ot: "Judges 10-12", psalm: "Psalm 86", nt: "John 18" },
  { ot: "Judges 13-15", psalm: "Psalm 87", nt: "John 19" },
  { ot: "Judges 16-18", psalm: "Psalm 88", nt: "John 20" },
  { ot: "Judges 19-21", psalm: "Psalm 89", nt: "John 21" },

  // ===== Ruth (4 chapters) — Days 90-91 =====
  { ot: "Ruth 1-2", psalm: "Psalm 90", nt: "Acts 1" },
  { ot: "Ruth 3-4", psalm: "Psalm 91", nt: "Acts 2" },

  // ===== 1 Samuel (31 chapters) — Days 92-103 =====
  { ot: "1 Samuel 1-3", psalm: "Psalm 92", nt: "Acts 3" },
  { ot: "1 Samuel 4-6", psalm: "Psalm 93", nt: "Acts 4" },
  { ot: "1 Samuel 7-9", psalm: "Psalm 94", nt: "Acts 5" },
  { ot: "1 Samuel 10-12", psalm: "Psalm 95", nt: "Acts 6" },
  { ot: "1 Samuel 13-14", psalm: "Psalm 96", nt: "Acts 7" },
  { ot: "1 Samuel 15-16", psalm: "Psalm 97", nt: "Acts 8" },
  { ot: "1 Samuel 17-18", psalm: "Psalm 98", nt: "Acts 9" },
  { ot: "1 Samuel 19-20", psalm: "Psalm 99", nt: "Acts 10" },
  { ot: "1 Samuel 21-23", psalm: "Psalm 100", nt: "Acts 11" },
  { ot: "1 Samuel 24-26", psalm: "Psalm 101", nt: "Acts 12" },
  { ot: "1 Samuel 27-29", psalm: "Psalm 102", nt: "Acts 13" },
  { ot: "1 Samuel 30-31", psalm: "Psalm 103", nt: "Acts 14" },

  // ===== 2 Samuel (24 chapters) — Days 104-112 =====
  { ot: "2 Samuel 1-3", psalm: "Psalm 104", nt: "Acts 15" },
  { ot: "2 Samuel 4-6", psalm: "Psalm 105", nt: "Acts 16" },
  { ot: "2 Samuel 7-9", psalm: "Psalm 106", nt: "Acts 17" },
  { ot: "2 Samuel 10-12", psalm: "Psalm 107", nt: "Acts 18" },
  { ot: "2 Samuel 13-14", psalm: "Psalm 108", nt: "Acts 19" },
  { ot: "2 Samuel 15-17", psalm: "Psalm 109", nt: "Acts 20" },
  { ot: "2 Samuel 18-19", psalm: "Psalm 110", nt: "Acts 21" },
  { ot: "2 Samuel 20-21", psalm: "Psalm 111", nt: "Acts 22" },
  { ot: "2 Samuel 22-24", psalm: "Psalm 112", nt: "Acts 23" },

  // ===== 1 Kings (22 chapters) — Days 113-121 =====
  { ot: "1 Kings 1-2", psalm: "Psalm 113", nt: "Acts 24" },
  { ot: "1 Kings 3-4", psalm: "Psalm 114", nt: "Acts 25" },
  { ot: "1 Kings 5-6", psalm: "Psalm 115", nt: "Acts 26" },
  { ot: "1 Kings 7-8", psalm: "Psalm 116", nt: "Acts 27" },
  { ot: "1 Kings 9-10", psalm: "Psalm 117", nt: "Acts 28" },
  { ot: "1 Kings 11-12", psalm: "Psalm 118", nt: "Romans 1" },
  { ot: "1 Kings 13-15", psalm: "Psalm 119:1-88", nt: "Romans 2" },
  { ot: "1 Kings 16-18", psalm: "Psalm 119:89-176", nt: "Romans 3" },
  { ot: "1 Kings 19-22", psalm: "Psalm 120", nt: "Romans 4" },

  // ===== 2 Kings (25 chapters) — Days 122-131 =====
  { ot: "2 Kings 1-3", psalm: "Psalm 121", nt: "Romans 5" },
  { ot: "2 Kings 4-5", psalm: "Psalm 122", nt: "Romans 6" },
  { ot: "2 Kings 6-8", psalm: "Psalm 123", nt: "Romans 7" },
  { ot: "2 Kings 9-10", psalm: "Psalm 124", nt: "Romans 8" },
  { ot: "2 Kings 11-13", psalm: "Psalm 125", nt: "Romans 9" },
  { ot: "2 Kings 14-15", psalm: "Psalm 126", nt: "Romans 10" },
  { ot: "2 Kings 16-17", psalm: "Psalm 127", nt: "Romans 11" },
  { ot: "2 Kings 18-19", psalm: "Psalm 128", nt: "Romans 12" },
  { ot: "2 Kings 20-22", psalm: "Psalm 129", nt: "Romans 13" },
  { ot: "2 Kings 23-25", psalm: "Psalm 130", nt: "Romans 14" },

  // ===== 1 Chronicles (29 chapters) — Days 132-142 =====
  { ot: "1 Chronicles 1-2", psalm: "Psalm 131", nt: "Romans 15" },
  { ot: "1 Chronicles 3-5", psalm: "Psalm 132", nt: "Romans 16" },
  { ot: "1 Chronicles 6-7", psalm: "Psalm 133", nt: "1 Corinthians 1" },
  { ot: "1 Chronicles 8-10", psalm: "Psalm 134", nt: "1 Corinthians 2" },
  { ot: "1 Chronicles 11-12", psalm: "Psalm 135", nt: "1 Corinthians 3" },
  { ot: "1 Chronicles 13-15", psalm: "Psalm 136", nt: "1 Corinthians 4" },
  { ot: "1 Chronicles 16-17", psalm: "Psalm 137", nt: "1 Corinthians 5" },
  { ot: "1 Chronicles 18-20", psalm: "Psalm 138", nt: "1 Corinthians 6" },
  { ot: "1 Chronicles 21-23", psalm: "Psalm 139", nt: "1 Corinthians 7" },
  { ot: "1 Chronicles 24-26", psalm: "Psalm 140", nt: "1 Corinthians 8" },
  { ot: "1 Chronicles 27-29", psalm: "Psalm 141", nt: "1 Corinthians 9" },

  // ===== 2 Chronicles (36 chapters) — Days 143-155 =====
  { ot: "2 Chronicles 1-3", psalm: "Psalm 142", nt: "1 Corinthians 10" },
  { ot: "2 Chronicles 4-6", psalm: "Psalm 143", nt: "1 Corinthians 11" },
  { ot: "2 Chronicles 7-9", psalm: "Psalm 144", nt: "1 Corinthians 12" },
  { ot: "2 Chronicles 10-12", psalm: "Psalm 145", nt: "1 Corinthians 13" },
  { ot: "2 Chronicles 13-15", psalm: "Psalm 146", nt: "1 Corinthians 14" },
  { ot: "2 Chronicles 16-17", psalm: "Psalm 147", nt: "1 Corinthians 15" },
  { ot: "2 Chronicles 18-19", psalm: "Psalm 148", nt: "1 Corinthians 16" },
  { ot: "2 Chronicles 20-21", psalm: "Psalm 149", nt: "2 Corinthians 1" },
  { ot: "2 Chronicles 22-24", psalm: "Psalm 150", nt: "2 Corinthians 2" },
  // --- Psalm cycle 2 begins ---
  { ot: "2 Chronicles 25-27", psalm: "Psalm 1", nt: "2 Corinthians 3" },
  { ot: "2 Chronicles 28-29", psalm: "Psalm 2", nt: "2 Corinthians 4" },
  { ot: "2 Chronicles 30-32", psalm: "Psalm 3", nt: "2 Corinthians 5" },
  { ot: "2 Chronicles 33-36", psalm: "Psalm 4", nt: "2 Corinthians 6" },

  // ===== Ezra (10 chapters) — Days 156-159 =====
  { ot: "Ezra 1-3", psalm: "Psalm 5", nt: "2 Corinthians 7" },
  { ot: "Ezra 4-6", psalm: "Psalm 6", nt: "2 Corinthians 8" },
  { ot: "Ezra 7-8", psalm: "Psalm 7", nt: "2 Corinthians 9" },
  { ot: "Ezra 9-10", psalm: "Psalm 8", nt: "2 Corinthians 10" },

  // ===== Nehemiah (13 chapters) — Days 160-164 =====
  { ot: "Nehemiah 1-3", psalm: "Psalm 9", nt: "2 Corinthians 11" },
  { ot: "Nehemiah 4-6", psalm: "Psalm 10", nt: "2 Corinthians 12" },
  { ot: "Nehemiah 7-8", psalm: "Psalm 11", nt: "2 Corinthians 13" },
  { ot: "Nehemiah 9-10", psalm: "Psalm 12", nt: "Galatians 1" },
  { ot: "Nehemiah 11-13", psalm: "Psalm 13", nt: "Galatians 2" },

  // ===== Esther (10 chapters) — Days 165-168 =====
  { ot: "Esther 1-3", psalm: "Psalm 14", nt: "Galatians 3" },
  { ot: "Esther 4-6", psalm: "Psalm 15", nt: "Galatians 4" },
  { ot: "Esther 7-8", psalm: "Psalm 16", nt: "Galatians 5" },
  { ot: "Esther 9-10", psalm: "Psalm 17", nt: "Galatians 6" },

  // ===== Job (42 chapters) — Days 169-184 =====
  { ot: "Job 1-3", psalm: "Psalm 18", nt: "Ephesians 1" },
  { ot: "Job 4-6", psalm: "Psalm 19", nt: "Ephesians 2" },
  { ot: "Job 7-8", psalm: "Psalm 20", nt: "Ephesians 3" },
  { ot: "Job 9-10", psalm: "Psalm 21", nt: "Ephesians 4" },
  { ot: "Job 11-13", psalm: "Psalm 22", nt: "Ephesians 5" },
  { ot: "Job 14-16", psalm: "Psalm 23", nt: "Ephesians 6" },
  { ot: "Job 17-18", psalm: "Psalm 24", nt: "Philippians 1" },
  { ot: "Job 19-20", psalm: "Psalm 25", nt: "Philippians 2" },
  { ot: "Job 21-22", psalm: "Psalm 26", nt: "Philippians 3" },
  { ot: "Job 23-25", psalm: "Psalm 27", nt: "Philippians 4" },
  { ot: "Job 26-28", psalm: "Psalm 28", nt: "Colossians 1" },
  { ot: "Job 29-31", psalm: "Psalm 29", nt: "Colossians 2" },
  { ot: "Job 32-34", psalm: "Psalm 30", nt: "Colossians 3" },
  { ot: "Job 35-37", psalm: "Psalm 31", nt: "Colossians 4" },
  { ot: "Job 38-39", psalm: "Psalm 32", nt: "1 Thessalonians 1" },
  { ot: "Job 40-42", psalm: "Psalm 33", nt: "1 Thessalonians 2" },

  // ===== Psalms is in the psalm track — skip to Proverbs =====
  // ===== Proverbs (31 chapters) — Days 185-196 =====
  { ot: "Proverbs 1-3", psalm: "Psalm 34", nt: "1 Thessalonians 3" },
  { ot: "Proverbs 4-6", psalm: "Psalm 35", nt: "1 Thessalonians 4" },
  { ot: "Proverbs 7-8", psalm: "Psalm 36", nt: "1 Thessalonians 5" },
  { ot: "Proverbs 9-10", psalm: "Psalm 37", nt: "2 Thessalonians 1" },
  { ot: "Proverbs 11-13", psalm: "Psalm 38", nt: "2 Thessalonians 2" },
  { ot: "Proverbs 14-15", psalm: "Psalm 39", nt: "2 Thessalonians 3" },
  { ot: "Proverbs 16-18", psalm: "Psalm 40", nt: "1 Timothy 1" },
  { ot: "Proverbs 19-21", psalm: "Psalm 41", nt: "1 Timothy 2" },
  { ot: "Proverbs 22-23", psalm: "Psalm 42", nt: "1 Timothy 3" },
  { ot: "Proverbs 24-26", psalm: "Psalm 43", nt: "1 Timothy 4" },
  { ot: "Proverbs 27-29", psalm: "Psalm 44", nt: "1 Timothy 5" },
  { ot: "Proverbs 30-31", psalm: "Psalm 45", nt: "1 Timothy 6" },

  // ===== Ecclesiastes (12 chapters) — Days 197-200 =====
  { ot: "Ecclesiastes 1-3", psalm: "Psalm 46", nt: "2 Timothy 1" },
  { ot: "Ecclesiastes 4-6", psalm: "Psalm 47", nt: "2 Timothy 2" },
  { ot: "Ecclesiastes 7-9", psalm: "Psalm 48", nt: "2 Timothy 3" },
  { ot: "Ecclesiastes 10-12", psalm: "Psalm 49", nt: "2 Timothy 4" },

  // ===== Song of Solomon (8 chapters) — Days 201-203 =====
  { ot: "Song of Solomon 1-3", psalm: "Psalm 50", nt: "Titus 1" },
  { ot: "Song of Solomon 4-5", psalm: "Psalm 51", nt: "Titus 2" },
  { ot: "Song of Solomon 6-8", psalm: "Psalm 52", nt: "Titus 3" },

  // ===== Isaiah (66 chapters) — Days 204-227 =====
  { ot: "Isaiah 1-2", psalm: "Psalm 53", nt: "Philemon" },
  { ot: "Isaiah 3-4", psalm: "Psalm 54", nt: "Hebrews 1" },
  { ot: "Isaiah 5-6", psalm: "Psalm 55", nt: "Hebrews 2" },
  { ot: "Isaiah 7-8", psalm: "Psalm 56", nt: "Hebrews 3" },
  { ot: "Isaiah 9-10", psalm: "Psalm 57", nt: "Hebrews 4" },
  { ot: "Isaiah 11-13", psalm: "Psalm 58", nt: "Hebrews 5" },
  { ot: "Isaiah 14-16", psalm: "Psalm 59", nt: "Hebrews 6" },
  { ot: "Isaiah 17-19", psalm: "Psalm 60", nt: "Hebrews 7" },
  { ot: "Isaiah 20-22", psalm: "Psalm 61", nt: "Hebrews 8" },
  { ot: "Isaiah 23-25", psalm: "Psalm 62", nt: "Hebrews 9" },
  { ot: "Isaiah 26-27", psalm: "Psalm 63", nt: "Hebrews 10" },
  { ot: "Isaiah 28-29", psalm: "Psalm 64", nt: "Hebrews 11" },
  { ot: "Isaiah 30-31", psalm: "Psalm 65", nt: "Hebrews 12" },
  { ot: "Isaiah 32-33", psalm: "Psalm 66", nt: "Hebrews 13" },
  { ot: "Isaiah 34-36", psalm: "Psalm 67", nt: "James 1" },
  { ot: "Isaiah 37-38", psalm: "Psalm 68", nt: "James 2" },
  { ot: "Isaiah 39-40", psalm: "Psalm 69", nt: "James 3" },
  { ot: "Isaiah 41-42", psalm: "Psalm 70", nt: "James 4" },
  { ot: "Isaiah 43-44", psalm: "Psalm 71", nt: "James 5" },
  { ot: "Isaiah 45-47", psalm: "Psalm 72", nt: "1 Peter 1" },
  { ot: "Isaiah 48-49", psalm: "Psalm 73", nt: "1 Peter 2" },
  { ot: "Isaiah 50-52", psalm: "Psalm 74", nt: "1 Peter 3" },
  { ot: "Isaiah 53-55", psalm: "Psalm 75", nt: "1 Peter 4" },
  { ot: "Isaiah 56-58", psalm: "Psalm 76", nt: "1 Peter 5" },
  { ot: "Isaiah 59-61", psalm: "Psalm 77", nt: "2 Peter 1" },
  { ot: "Isaiah 62-64", psalm: "Psalm 78", nt: "2 Peter 2" },
  { ot: "Isaiah 65-66", psalm: "Psalm 79", nt: "2 Peter 3" },

  // ===== Jeremiah (52 chapters) — Days 231-250 =====
  { ot: "Jeremiah 1-2", psalm: "Psalm 80", nt: "1 John 1" },
  { ot: "Jeremiah 3-4", psalm: "Psalm 81", nt: "1 John 2" },
  { ot: "Jeremiah 5-6", psalm: "Psalm 82", nt: "1 John 3" },
  { ot: "Jeremiah 7-8", psalm: "Psalm 83", nt: "1 John 4" },
  { ot: "Jeremiah 9-10", psalm: "Psalm 84", nt: "1 John 5" },
  { ot: "Jeremiah 11-13", psalm: "Psalm 85", nt: "2 John" },
  { ot: "Jeremiah 14-15", psalm: "Psalm 86", nt: "3 John" },
  { ot: "Jeremiah 16-17", psalm: "Psalm 87", nt: "Jude" },
  { ot: "Jeremiah 18-20", psalm: "Psalm 88", nt: "Revelation 1" },
  { ot: "Jeremiah 21-23", psalm: "Psalm 89", nt: "Revelation 2" },
  { ot: "Jeremiah 24-25", psalm: "Psalm 90", nt: "Revelation 3" },
  { ot: "Jeremiah 26-27", psalm: "Psalm 91", nt: "Revelation 4" },
  { ot: "Jeremiah 28-29", psalm: "Psalm 92", nt: "Revelation 5" },
  { ot: "Jeremiah 30-31", psalm: "Psalm 93", nt: "Revelation 6" },
  { ot: "Jeremiah 32-33", psalm: "Psalm 94", nt: "Revelation 7" },
  { ot: "Jeremiah 34-36", psalm: "Psalm 95", nt: "Revelation 8" },
  { ot: "Jeremiah 37-39", psalm: "Psalm 96", nt: "Revelation 9" },
  { ot: "Jeremiah 40-42", psalm: "Psalm 97", nt: "Revelation 10" },
  { ot: "Jeremiah 43-45", psalm: "Psalm 98", nt: "Revelation 11" },
  { ot: "Jeremiah 46-48", psalm: "Psalm 99", nt: "Revelation 12" },
  { ot: "Jeremiah 49-50", psalm: "Psalm 100", nt: "Revelation 13" },
  { ot: "Jeremiah 51-52", psalm: "Psalm 101", nt: "Revelation 14" },

  // ===== Lamentations (5 chapters) — Days 253-254 =====
  { ot: "Lamentations 1-2", psalm: "Psalm 102", nt: "Revelation 15" },
  { ot: "Lamentations 3-5", psalm: "Psalm 103", nt: "Revelation 16" },

  // ===== Ezekiel (48 chapters) — Days 255-272 =====
  { ot: "Ezekiel 1-3", psalm: "Psalm 104", nt: "Revelation 17" },
  { ot: "Ezekiel 4-6", psalm: "Psalm 105", nt: "Revelation 18" },
  { ot: "Ezekiel 7-9", psalm: "Psalm 106", nt: "Revelation 19" },
  { ot: "Ezekiel 10-11", psalm: "Psalm 107", nt: "Revelation 20" },
  { ot: "Ezekiel 12-13", psalm: "Psalm 108", nt: "Revelation 21" },
  { ot: "Ezekiel 14-15", psalm: "Psalm 109", nt: "Revelation 22" },
  // --- NT loops back to Matthew ---
  { ot: "Ezekiel 16-17", psalm: "Psalm 110", nt: "Matthew 1" },
  { ot: "Ezekiel 18-19", psalm: "Psalm 111", nt: "Matthew 2" },
  { ot: "Ezekiel 20-21", psalm: "Psalm 112", nt: "Matthew 3" },
  { ot: "Ezekiel 22-23", psalm: "Psalm 113", nt: "Matthew 4" },
  { ot: "Ezekiel 24-26", psalm: "Psalm 114", nt: "Matthew 5" },
  { ot: "Ezekiel 27-28", psalm: "Psalm 115", nt: "Matthew 6" },
  { ot: "Ezekiel 29-30", psalm: "Psalm 116", nt: "Matthew 7" },
  { ot: "Ezekiel 31-32", psalm: "Psalm 117", nt: "Matthew 8" },
  { ot: "Ezekiel 33-34", psalm: "Psalm 118", nt: "Matthew 9" },
  { ot: "Ezekiel 35-36", psalm: "Psalm 119:1-88", nt: "Matthew 10" },
  { ot: "Ezekiel 37-39", psalm: "Psalm 119:89-176", nt: "Matthew 11" },
  { ot: "Ezekiel 40-42", psalm: "Psalm 120", nt: "Matthew 12" },
  { ot: "Ezekiel 43-44", psalm: "Psalm 121", nt: "Matthew 13" },
  { ot: "Ezekiel 45-46", psalm: "Psalm 122", nt: "Matthew 14" },
  { ot: "Ezekiel 47-48", psalm: "Psalm 123", nt: "Matthew 15" },

  // ===== Daniel (12 chapters) — Days 276-279 =====
  { ot: "Daniel 1-3", psalm: "Psalm 124", nt: "Matthew 16" },
  { ot: "Daniel 4-6", psalm: "Psalm 125", nt: "Matthew 17" },
  { ot: "Daniel 7-9", psalm: "Psalm 126", nt: "Matthew 18" },
  { ot: "Daniel 10-12", psalm: "Psalm 127", nt: "Matthew 19" },

  // ===== Hosea (14 chapters) — Days 280-284 =====
  { ot: "Hosea 1-3", psalm: "Psalm 128", nt: "Matthew 20" },
  { ot: "Hosea 4-6", psalm: "Psalm 129", nt: "Matthew 21" },
  { ot: "Hosea 7-9", psalm: "Psalm 130", nt: "Matthew 22" },
  { ot: "Hosea 10-11", psalm: "Psalm 131", nt: "Matthew 23" },
  { ot: "Hosea 12-14", psalm: "Psalm 132", nt: "Matthew 24" },

  // ===== Joel (3 chapters) — Day 285 =====
  { ot: "Joel 1-3", psalm: "Psalm 133", nt: "Matthew 25" },

  // ===== Amos (9 chapters) — Days 286-288 =====
  { ot: "Amos 1-3", psalm: "Psalm 134", nt: "Matthew 26" },
  { ot: "Amos 4-6", psalm: "Psalm 135", nt: "Matthew 27" },
  { ot: "Amos 7-9", psalm: "Psalm 136", nt: "Matthew 28" },

  // ===== Obadiah (1 chapter) + Jonah (4 chapters) — Days 289-290 =====
  { ot: "Obadiah", psalm: "Psalm 137", nt: "Mark 1" },
  { ot: "Jonah 1-4", psalm: "Psalm 138", nt: "Mark 2" },

  // ===== Micah (7 chapters) — Days 291-293 =====
  { ot: "Micah 1-3", psalm: "Psalm 139", nt: "Mark 3" },
  { ot: "Micah 4-5", psalm: "Psalm 140", nt: "Mark 4" },
  { ot: "Micah 6-7", psalm: "Psalm 141", nt: "Mark 5" },

  // ===== Nahum (3 chapters) — Day 294 =====
  { ot: "Nahum 1-3", psalm: "Psalm 142", nt: "Mark 6" },

  // ===== Habakkuk (3 chapters) — Day 295 =====
  { ot: "Habakkuk 1-3", psalm: "Psalm 143", nt: "Mark 7" },

  // ===== Zephaniah (3 chapters) — Day 296 =====
  { ot: "Zephaniah 1-3", psalm: "Psalm 144", nt: "Mark 8" },

  // ===== Haggai (2 chapters) — Day 297 =====
  { ot: "Haggai 1-2", psalm: "Psalm 145", nt: "Mark 9" },

  // ===== Zechariah (14 chapters) — Days 298-302 =====
  { ot: "Zechariah 1-3", psalm: "Psalm 146", nt: "Mark 10" },
  { ot: "Zechariah 4-6", psalm: "Psalm 147", nt: "Mark 11" },
  { ot: "Zechariah 7-9", psalm: "Psalm 148", nt: "Mark 12" },
  { ot: "Zechariah 10-12", psalm: "Psalm 149", nt: "Mark 13" },
  { ot: "Zechariah 13-14", psalm: "Psalm 150", nt: "Mark 14" },

  // --- Psalm cycle 3 begins ---
  // ===== Malachi (4 chapters) — Days 303-304 =====
  { ot: "Malachi 1-2", psalm: "Psalm 1", nt: "Mark 15" },
  { ot: "Malachi 3-4", psalm: "Psalm 2", nt: "Mark 16" },

  // ===== OT complete — Cycle back through selected OT books for remaining days =====
  // ===== Days 305-365: OT revisit (Genesis forward) =====
  { ot: "Genesis 1-3", psalm: "Psalm 3", nt: "Luke 1" },
  { ot: "Genesis 4-6", psalm: "Psalm 4", nt: "Luke 2" },
  { ot: "Genesis 7-9", psalm: "Psalm 5", nt: "Luke 3" },
  { ot: "Genesis 10-12", psalm: "Psalm 6", nt: "Luke 4" },
  { ot: "Genesis 13-15", psalm: "Psalm 7", nt: "Luke 5" },
  { ot: "Genesis 16-18", psalm: "Psalm 8", nt: "Luke 6" },
  { ot: "Genesis 19-21", psalm: "Psalm 9", nt: "Luke 7" },
  { ot: "Genesis 22-24", psalm: "Psalm 10", nt: "Luke 8" },
  { ot: "Genesis 25-27", psalm: "Psalm 11", nt: "Luke 9" },
  { ot: "Genesis 28-30", psalm: "Psalm 12", nt: "Luke 10" },
  { ot: "Genesis 31-33", psalm: "Psalm 13", nt: "Luke 11" },
  { ot: "Genesis 34-36", psalm: "Psalm 14", nt: "Luke 12" },
  { ot: "Genesis 37-39", psalm: "Psalm 15", nt: "Luke 13" },
  { ot: "Genesis 40-42", psalm: "Psalm 16", nt: "Luke 14" },
  { ot: "Genesis 43-45", psalm: "Psalm 17", nt: "Luke 15" },
  { ot: "Genesis 46-48", psalm: "Psalm 18", nt: "Luke 16" },
  { ot: "Genesis 49-50", psalm: "Psalm 19", nt: "Luke 17" },
  { ot: "Exodus 1-3", psalm: "Psalm 20", nt: "Luke 18" },
  { ot: "Exodus 4-6", psalm: "Psalm 21", nt: "Luke 19" },
  { ot: "Exodus 7-9", psalm: "Psalm 22", nt: "Luke 20" },
  { ot: "Exodus 10-12", psalm: "Psalm 23", nt: "Luke 21" },
  { ot: "Exodus 13-15", psalm: "Psalm 24", nt: "Luke 22" },
  { ot: "Exodus 16-18", psalm: "Psalm 25", nt: "Luke 23" },
  { ot: "Exodus 19-21", psalm: "Psalm 26", nt: "Luke 24" },
  { ot: "Exodus 22-24", psalm: "Psalm 27", nt: "John 1" },
  { ot: "Exodus 25-27", psalm: "Psalm 28", nt: "John 2" },
  { ot: "Exodus 28-30", psalm: "Psalm 29", nt: "John 3" },
  { ot: "Exodus 31-33", psalm: "Psalm 30", nt: "John 4" },
  { ot: "Exodus 34-36", psalm: "Psalm 31", nt: "John 5" },
  { ot: "Exodus 37-40", psalm: "Psalm 32", nt: "John 6" },
  { ot: "Leviticus 1-4", psalm: "Psalm 33", nt: "John 7" },
  { ot: "Leviticus 5-7", psalm: "Psalm 34", nt: "John 8" },
  { ot: "Leviticus 8-10", psalm: "Psalm 35", nt: "John 9" },
  { ot: "Leviticus 11-13", psalm: "Psalm 36", nt: "John 10" },
  { ot: "Leviticus 14-15", psalm: "Psalm 37", nt: "John 11" },
  { ot: "Leviticus 16-18", psalm: "Psalm 38", nt: "John 12" },
  { ot: "Leviticus 19-21", psalm: "Psalm 39", nt: "John 13" },
  { ot: "Leviticus 22-23", psalm: "Psalm 40", nt: "John 14" },
  { ot: "Leviticus 24-25", psalm: "Psalm 41", nt: "John 15" },
  { ot: "Leviticus 26-27", psalm: "Psalm 42", nt: "John 16" },
  { ot: "Numbers 1-3", psalm: "Psalm 43", nt: "John 17" },
  { ot: "Numbers 4-6", psalm: "Psalm 44", nt: "John 18" },
  { ot: "Numbers 7-8", psalm: "Psalm 45", nt: "John 19" },
  { ot: "Numbers 9-11", psalm: "Psalm 46", nt: "John 20" },
  { ot: "Numbers 12-14", psalm: "Psalm 47", nt: "John 21" },
  { ot: "Numbers 15-17", psalm: "Psalm 48", nt: "Acts 1" },
  { ot: "Numbers 18-20", psalm: "Psalm 49", nt: "Acts 2" },
  { ot: "Numbers 21-23", psalm: "Psalm 50", nt: "Acts 3" },
  { ot: "Numbers 24-26", psalm: "Psalm 51", nt: "Acts 4" },
  { ot: "Numbers 27-29", psalm: "Psalm 52", nt: "Acts 5" },
  { ot: "Numbers 30-32", psalm: "Psalm 53", nt: "Acts 6" },
  { ot: "Numbers 33-36", psalm: "Psalm 54", nt: "Acts 7" },
  { ot: "Deuteronomy 1-3", psalm: "Psalm 55", nt: "Acts 8" },
  { ot: "Deuteronomy 4-6", psalm: "Psalm 56", nt: "Acts 9" },
  { ot: "Deuteronomy 7-9", psalm: "Psalm 57", nt: "Acts 10" },
  { ot: "Deuteronomy 10-12", psalm: "Psalm 58", nt: "Acts 11" },
  { ot: "Deuteronomy 13-15", psalm: "Psalm 59", nt: "Acts 12" },
  { ot: "Deuteronomy 16-18", psalm: "Psalm 60", nt: "Acts 13" },
  { ot: "Deuteronomy 19-21", psalm: "Psalm 61", nt: "Acts 14" },
  { ot: "Deuteronomy 22-24", psalm: "Psalm 62", nt: "Acts 15" },
  { ot: "Deuteronomy 25-27", psalm: "Psalm 63", nt: "Acts 16" },
];
