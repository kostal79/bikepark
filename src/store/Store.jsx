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

    let dateFrom = new Date(this.calendar.from);
    let dateTo = new Date(this.calendar.to);
    let timeFrom = this.calendar.timeFrom;
    let timeTo = this.calendar.timeTo;
    function getHours(string) {
        return string.split(':')[0]
    }

    function getMinutes(string) {
        return string.split(':')[1]
    }
    dateFrom.setHours(getHours(timeFrom), getMinutes(timeFrom));
    dateTo.setHours(getHours(timeTo), getMinutes(timeTo))

    return {
        rentType: this.rentType.type,
        dateFrom,
        dateTo,
        delivery: this.delivery.type,
        chosenBikeTypes: this.chosenBikeTypes.getChoise(),
    }
  }
};

export default Store;
