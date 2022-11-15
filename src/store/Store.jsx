import BikeImage from "../images/bike.png";


let Store = {
  calendar: {
    _from: null,

    _to: null,

    _timeFrom: null,

    _timeTo: null,

    get from() {
      return this._from;
    },

    get to() {
      return this._to;
    },

    set from(value) {
      this._from = value;
    },

    set to(value) {
      this._to = value;
    },

    get timeFrom() {
      return this._timeFrom;
    },

    get timeTo() {
      return this._timeTo;
    },

    set timeFrom(value) {
      this._timeFrom = value;
    },

    set timeTo(value) {
      this._timeTo = value;
    },

    getStartRentPeriod() {
      if (this.from) {
        let date = new Date(this.from);
        let timeString = this.timeFrom;
        let hour = timeString.split(":")[0];
        let minutes = timeString.split(":")[1];
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          hour,
          minutes
        );
      }
    },
  },

  rentType: {
    _type: "for days",

    get type() {
      return this._type;
    },

    set type(value) {
      return (this._type = value);
    },
  },

  delivery: {
    _optionList: [
      { value: "by address", text: "На адрес" },
      { value: "bymyself", text: "Cамовывоз" },
    ],

    get optionList() {
      return this._optionList;
    },

    _type: "Самовывоз",

    get type() {
      return this._type;
    },

    set type(value) {
      this._type = value;
    },
  },

  bikeTypesList: [
    {
      id: 1,
      srcImage: <img src={BikeImage} alt="bike"></img>,
      type: { type: "al", text: "Аллюминий" },
      price: 90,
      about:
        "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
    },
    {
      id: 2,
      srcImage: <img src={BikeImage} alt="bike"></img>,
      type: { type: "carbon", text: "Карбон" },
      price: 180,
      about:
        "Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой.",
    },
    {
      id: 3,
      srcImage: <img src={BikeImage} alt="bike"></img>,
      type: { type: "city", text: "Горный/городской" },
      price: 90,
      about:
        "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
    },

    {
      id: 4,
      srcImage: <img src={BikeImage} alt="bike"></img>,
      type: { type: "econom", text: "Городской эконом" },
      price: 45,
      about:
        "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
    },
  ],

  chosenBikeTypes: {
    _bikeList: Object.preventExtensions({ 'al': false, 'carbon': false, 'city': false, 'econom': false }),

    get bikeList() {
       return this._bikeList;
    },

    setBikeList(value) {
        this._bikeList[value] = !this._bikeList[value];
    },

    getChoise() {
        let arr = [];
        for (let [key, value] of Object.entries(this.bikeList)) {
            if (value) arr.push(key)
        }
        return arr;
    }
  },

  selectSettings() {

    let dateFrom = this.calendar.from ? new Date(this.calendar.from) : null;
    let dateTo = this.calendar.to ? new Date(this.calendar.to): null;
    let timeFrom = this.calendar.timeFrom;
    let timeTo = this.calendar.timeTo;
    function getHours(string) {
        return string ? string.split(':')[0] : null;
    }

    function getMinutes(string) {
        return string ? string.split(':')[1] : null;
    }
    dateFrom = dateFrom ? dateFrom.setHours(getHours(timeFrom), getMinutes(timeFrom)) : null;
    dateTo = dateTo ? dateTo.setHours(getHours(timeTo), getMinutes(timeTo)) : null;

    return {
        rentType: this.rentType.type,
        dateFrom,
        dateTo,
        delivery: this.delivery.type,
        type: this.chosenBikeTypes.getChoise(),
    }
  },
};


let bikesStore = {
    store : [
    {
        brand: {short: 'Sava', full: 'Sava Lone Range 1.0 '},
        size: 20,
        type: { type: "carbon", text: "Карбон" },
        price: 90,
        imageName: '2dead7dc96259305dd1d2409664af2f8.jpg',
        id: '2dead7dc96259305dd1d2409664af2f8.jpg',
        reservedFrom: null,
        reservedTo: null,
    },

    {
        brand: {short: 'Trinx', full: 'Trinx Rapid 2.2'},
        size: 20,
        type: { type: "al", text: "Аллюминий" },
        price: 90,
        imageName: '6b24834cef01c9c96a7fc3e3b15f64b2.jpg',
        id: '6b24834cef01c9c96a7fc3e3b15f64b2.jpg',
        reservedFrom: null,
        reservedTo: null,
    },
    {
        brand: {short: 'Treck', full: 'Treck Traveller'},
        size: 21,
        type: { type: "econom", text: "Городской эконом" },
        price: 90,
        imageName: '45ed34e8916aab8015776743837038f2.jpg',
        id: '45ed34e8916aab8015776743837038f2.jpg',
        reservedFrom: null,
        reservedTo: null,
    },

    {
        brand: {short: 'Schwinn', full: 'Schwinn Traveller'},
        size: 19,
        type: { type: "al", text: "Аллюминий" },
        price: 90,
        imageName: '89b1349448935a0b5f4c049983299109.jpg',
        id: '89b1349448935a0b5f4c049983299109.jpg',
        reservedFrom: null,
        reservedTo: null,
    },

    {
        brand: {short: 'Schwinn', full: 'Schwinn Traveller'},
        size: 20,
        type: { type: "city", text: "Горный/городской" },
        price: 90,
        imageName: '321a3eb9e8bbfdb4b1bd533d2d9cdc5f.jpg',
        id: '321a3eb9e8bbfdb4b1bd533d2d9cdc5f.jpg',
        reservedFrom: null,
        reservedTo: null,
    },

    {
        brand: {short: 'Schwinn', full: 'Schwinn Traveller'},
        size: 19,
        type: { type: "al", text: "Аллюминий" },
        price: 90,
        imageName: 'd370d06e4fe282300d20ce4233cf14ed.jpg',
        id: 'd370d06e4fe282300d20ce4233cf14ed.jpg',
        reservedFrom: null,
        reservedTo: null,
    },

    {
        brand: {short: 'Trinx', full: 'Trinx 27.5 M116 Elite'},
        size: 20,
        type: { type: "al", text: "Аллюминий" },
        price: 90,
        imageName: '2457fbfb7420aa3befdc07ffb91ab243.jpg',
        id: '2457fbfb7420aa3befdc07ffb91ab243.jpg',
        reservedFrom: new Date(2022, 10, 1),
        reservedTo: new Date(2022, 11, 31),
    },

    {
        brand: {short: 'Trinx', full: 'Trinx 27.5 M116 Elite'},
        size: 21,
        type: { type: "al", text: "Аллюминий" },
        price: 90,
        imageName: '349f7463eac88c1694bda18e9cf4465c.jpg',
        id: '349f7463eac88c1694bda18e9cf4465c.jpg',
        reservedFrom: null,
        reservedTo: null,
    },
  ],

  getAllBrands() {
    let arrOfBrands = this.store.map((item) => item.brand.short);
    let set =  new Set(arrOfBrands)
    return Array.from(set).sort()
  },

  getAllSizes() {
    let arrOfSizes = this.store.map((item) => item.size);
    let set = new Set(arrOfSizes)
    return Array.from(set).sort((a, b) => a - b)
  },
}

export {bikesStore}

export default Store;
