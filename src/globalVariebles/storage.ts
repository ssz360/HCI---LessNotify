export let _database: any = undefined;

export const getDatabase = () => {
  if (!_database) {
    loadData();
  }
  if (!_database) {
    _database = {
      applications: [
        {
          id: 1,
          name: "Telegram",
          isSelected: false,
        },
        {
          id: 2,
          name: "WhatsApp",
          isSelected: false,
        },
        {
          id: 3,
          name: "IMO",
          isSelected: false,
        },
        {
          id: 4,
          name: "Skype",
          isSelected: false,
        },
        {
          id: 5,
          name: "Messenger",
          isSelected: false,
        },
      ],
      setTime: {
        default: {
          from: "2023-01-05T12:46:05+01:00",
          to: "2023-01-05T12:46:05+01:00",
        },
      },
      repeat: {
        default: [
          { name: "Monday", value: false },
          { name: "Tuesday", value: false },
          { name: "Wednesday", value: false },
          { name: "Thursday", value: false },
          { name: "Friday", value: false },
          { name: "Saturday", value: false },
          { name: "Sunday", value: false },
        ],
      },
      keywords: ["help", "call me", "exam", "HCI"],
      contacts: {
        all: [
          "Shahab",
          "Pouya",
          "Negin",
          "HCI Group",
          "Jack",
          "Soft 3",
          "Giulio",
          "Billy",
          "Jessie",
        ],
        selectedContacts: ["Shahab", "Pouya", "Negin", "HCI Group"],
      },
    };
    saveData(_database);
  }
  return Object.assign({}, _database);
};

export const saveData = (database: any) => {
  _database = Object.assign({}, database);
  localStorage.setItem("database", JSON.stringify(_database));
};

export const loadData = () => {
  _database = JSON.parse(localStorage.getItem("database") as string);
  return _database;
};
