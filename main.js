module.exports = class {
  constructor() {
    // If any of your functions require the "this" field, you can bind it here.
    this.serialize = this.serialize.bind(this);
    this.serializeChapters = this.serializeChapters.bind(this);
    this.search = this.search.bind(this);
    this.getManga = this.getManga.bind(this);
    this.setLocale("en");
  }

  // Metadata. No need to provide if you don't wish to.
  _sourceName = "Main";

  getName() {
    return this._sourceName;
  }

  _icon = "https://mangadex.org/favicon.ico";

  getIcon() {
    return this._icon;
  }

  _canDownload = true;
  get canDownload() {
    return this._canDownload;
  }

  // If this is not supported, return false.
  // Should return a boolean download status.
  download = async () => {
    return false;
  };

  // Should change after each search. If this is not supported, change to Infinity.
  async getItemCount() {
    return 0;
  }

  // tagID is present in case a user wants to search by tag (if supported).
  Tags = Promise.resolve([]);

  // Should be able to resolve to a locale-specific string.
  _locale = "en";

  _locales = ["en"];

  // searchFilters should be used to filter the results of search.
  searchFilters = {
    query: "",
    offset: 0,
    results: Infinity,

    testOne: [],
    testTwo_1: [],
    testTwo_2: [],
  };

  // See source.d.ts for the format of the filters object.
  searchFilterFieldTypes = {
    Test: {
      fieldType: "checkbox",
      writeTo: "testOne",
      choices: [
        {
          display: "Test One",
          value: "testOne",
        },
        {
          display: "Test Two",
          value: "testTwo",
        },
        {
          display: "Test Three",
        },
      ],
    },

    TestTwo: {
      fieldType: "checkbox3",
      writeTo: "testTwo_1",
      disallowedWriteTo: "testTwo_2",
      choices: [
        {
          display: "Test Two One",
          value: "testTwo_1",
        },
        {
          display: "Test Two Two",
          value: "testTwo_2",
        },
        {
          display: "Test Two Three",
          value: "testTwo_3",
        },
      ],
    },

    TestThree: {
      fieldType: "select",
      writeTo: "testThree",
      choices: [
        {
          label: "Test Three One",
          value: "testThree_1",
        },
        {
          label: "Test Three Two",
          value: "testThree_2",
        },
        {
          label: "Test Three Three",
          value: "testThree_3",
        },
      ],
    },
  };

  setLocale(locale) {
    this._locale = locale;
  }

  getLocale() {
    return this._locale;
  }

  getLocales() {
    return [...this._locales];
  }

  setFilters(searchFilters) {
    this.searchFilters = searchFilters;
  }

  getFilters() {
    return { ...this.searchFilters };
  }

  // See source.d.ts for the format of the filters object.
  getFieldTypes() {
    return { ...this.searchFilterFieldTypes };
  }

  // Should implicitly serialize to the Manga object format.
  async getManga(mangaID, doFull) {
    return {};
  }

  // Self-explanatory.
  getUrl(mangaID) {
    return "";
  }

  // Should implicitly serialize to the Chapter object format.
  async getChapters(mangaID) {
    return [];
  }

  // Should be able to convert from your object format to the FullManga object format.
  // doFull false should omit the Chapters and Authors.
  async serialize(mangaItem, doFull) {
    return false;
  }

  // Should be a list of image URLs.
  async getPages(chapterId) {
    return [];
  }

  // Should be able to convert from your object format to the Chapter object format.
  async serializeChapters(chapters) {
    return [];
  }

  // Should return a promise that resolves to an array of authors.
  async getAuthors(mangaID) {
    return [];
  }

  // Should return a promise that resolves to an array of your manga object format.
  // Items should be able to be passed to serialize to get a FullManga object
  async search() {
    return [];
  }
};
