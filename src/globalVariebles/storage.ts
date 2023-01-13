export let _database: any = undefined;

export const getDatabase = () => {
  if (!_database) {
    loadData();
  }
  if (!_database) {
    _database = {
      applications: [
        { id: 1, name: "Telegram", isSelected: true },
        { id: 2, name: "WhatsApp", isSelected: false },
        { id: 3, name: "IMO", isSelected: false },
        { id: 4, name: "Skype", isSelected: true },
        { id: 5, name: "Messenger", isSelected: false },
      ],
      setTime: {
        default: {
          from: "2023-01-05T12:46:05+01:00",
          to: "2023-01-05T12:46:05+01:00",
        },
        Skype: {
          Negin: {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
        "turn-off": {
          "Selected Applications": {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
        Telegram: {
          Shahab: {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T16:46:00+01:00",
          },
          Pouya: {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
          "HCI Group": {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
          Negin: {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
        IMO: {
          "The selected contacts or groups": {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
        WhatsApp: {
          Negin: {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
        Messenger: {
          Negin: {
            from: "2023-01-05T15:53:00+01:00",
            to: "2023-01-05T22:40:00+01:00",
          },
          "HCI Group": {
            from: "2023-01-05T12:46:05+01:00",
            to: "2023-01-05T12:46:05+01:00",
          },
        },
      },
      repeat: {
        default: [
          { name: "Monday", value: false },
          { name: "Tuesday", value: true },
          { name: "Wednesday", value: false },
          { name: "Thursday", value: false },
          { name: "Friday", value: true },
          { name: "Saturday", value: false },
          { name: "Sunday", value: false },
        ],
        Skype: {
          Negin: [
            { name: "Monday", value: false },
            { name: "Tuesday", value: false },
            { name: "Wednesday", value: false },
            { name: "Thursday", value: false },
            { name: "Friday", value: false },
            { name: "Saturday", value: false },
            { name: "Sunday", value: false },
          ],
        },
        "turn-off": {
          "Selected Applications": [
            { name: "Monday", value: false },
            { name: "Tuesday", value: false },
            { name: "Wednesday", value: true },
            { name: "Thursday", value: true },
            { name: "Friday", value: false },
            { name: "Saturday", value: false },
            { name: "Sunday", value: false },
          ],
        },
        WhatsApp: {
          Negin: [
            { name: "Monday", value: false },
            { name: "Tuesday", value: true },
            { name: "Wednesday", value: false },
            { name: "Thursday", value: false },
            { name: "Friday", value: true },
            { name: "Saturday", value: false },
            { name: "Sunday", value: false },
          ],
        },
        Messenger: {
          Negin: [
            { name: "Monday", value: false },
            { name: "Tuesday", value: true },
            { name: "Wednesday", value: false },
            { name: "Thursday", value: false },
            { name: "Friday", value: true },
            { name: "Saturday", value: false },
            { name: "Sunday", value: false },
          ],
        },
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
        selectedContacts: ["Pouya", "Negin", "HCI Group"],
        priorityList: {
          Skype: ["Shahab", "Pouya", "Negin", "HCI Group", "Jessie", "Billy"],
          Telegram: ["Shahab", "Pouya"],
          WhatsApp: ["Shahab", "Pouya", "Negin", "HCI Group"],
          IMO: ["Shahab", "Pouya", "HCI Group", "Giulio"],
          Messenger: ["Negin", "HCI Group"],
        },
      },
      featuresStatus: {
        turnOffNotification: false,
        Prioritizing: false,
        contentFiltering: false,
      },
      showSlider: true,
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
