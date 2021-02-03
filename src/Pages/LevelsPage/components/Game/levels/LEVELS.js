const LEVELS = {
  1: {
    title: {
      en: "Simple",
      ru: "Проще некуда"
    },
    description: {
      en: "Your goal is to save the Dweep children",
      ru: "Ваша цель - спасти детей Двипа"
    },
    initCharPosition: {
      x: 3,
      y: 5,
    },
  },

  2: {
    title: {
      en: "Deflection",
      ru: "Отклонение"
    },
    description: {
      en: "To deflect a laser beam, place a mirror in its path. Mirrors can face one of two directions.",
      ru: "Чтобы отклонить лазерный луч, поместите на его пути зеркало. Зеркала могут смотреть в одно из двух направлений."
    },
    initCharPosition: {
      x: 2,
      y: 2,
    },
  },

  3: {
    title: {
      en: "Spin Doctor",
      ru: "Спин-доктор"
    },
    description: {
      en: "Use a wernch to rotate a mirror or a laser. There are two types of wrenches: clockwise and counterclockwise.",
      ru: "Используйте гаечный ключ, чтобы повернуть зеркало или лазер. Есть два типа гаечных ключей: по часовой стрелке и против часовой стрелки."
    },
    initCharPosition: {
      x: 2,
      y: 2,
    },
  },

  4: {
    title: {
      en: "House of Mirrors",
      ru: "Дом зеркал"
    },
    description: {
      en: "Dweep can pick up items in green squares to add to your inventory. Pick up lasers, and use them to destroy other lasers.",
      ru: "Двип может собирать предметы в зеленых квадратах и добавлять их в свой инвентарь. Подбирайте лазеры и используйте их, чтобы уничтожить другие лазеры."
    },
    initCharPosition: {
      x: 15,
      y: 10,
    },
  },

  5: {
    title: {
      en: "Bombing Alley",
      ru: "Бомбардировочная аллея"
    },
    description: {
      en: "A torch or a laser can light a bomb`s fuse. An exploding bomb will cause adjacent bombs to explode as well.",
      ru: "Факел или лазер могут зажечь запал бомбы. Взрыв бомбы вызовет взрыв соседних бомб."
    },
    initCharPosition: {
      x: 2,
      y: 2,
    },
  },

  6: {
    title: {
      en: "Dexterity",
      ru: "Ловкость"
    },
    description: {
      en: "An exploding bomb will destroy all adjacent object, including lasers, mirrors, and other bombs.",
      ru: "Взрывающаяся бомба уничтожит все прилегающие объекты, включая лазеры, зеркала и другие бомбы."
    },
    initCharPosition: {
      x: 8,
      y: 5,
    },
  },

  7: {
    title: {
      en: "Lasermania",
      ru: "Лазермания"
    },
    description: {
      en: "If Dweep steps on a freeze plate, Dweep will freeze and will be unable to move. Avoid the freeze plates here.",
      ru: "Если Двип наступит на пластину замораживания, Двип замерзнет и не сможет двигаться. Избегайте здесь морозильных пластин."
    },
    initCharPosition: {
      x: 2,
      y: 2,
    },
  },

  8: {
    title: {
      en: "Phoenix",
      ru: "Феникс"
    },
    description: {
      en: "Use a water bucket to make Dweep wet. A wet Dweep can pass through a single laser beam unharmed. Do not stop in the beam.",
      ru: "Используйте ведро с водой, чтобы намочить Dweep. Мокрый Двип может пройти сквозь один лазерный луч и не повредить его. Не останавливайтесь в луче."
    },
    initCharPosition: {
      x: 6,
      y: 8,
    },
  },

  9: {
    title: {
      en: "Squish Time",
      ru: "Время придавить"
    },
    description: {
      en: "Use a torch to thaw a frozen Dweep.",
      ru: "Используйте факел, чтобы разморозить замороженного Двипа."
    },
    initCharPosition: {
      x: 3,
      y: 2,
    },
  },

  10: {
    title: {
      en: "Dweeps on Ice",
      ru: "Двип на льду"
    },
    description: {
      en: "Use a torch to thaw a frozen Dweep.",
      ru: "Используйте факел, чтобы разморозить замороженного Двипа."
    },
    initCharPosition: {
      x: 13,
      y: 1,
    },
  },

  11: {
    title: {
      en: "Badda Bing",
      ru: "Ба-бах"
    },
    description: {
      en: "A water bucket can defuse an ignited bomb before it explodes, but if a laser beam is still passing through the bomb`s fuse, the bomb will re-ignite.",
      ru: "Ведро с водой может обезвредить загоревшуюся бомбу до того, как она взорвется, но если лазерный луч все еще проходит через предохранитель бомбы, бомба снова воспламенится."
    },
    initCharPosition: {
      x: 6,
      y: 9,
    },
  },

  12: {
    title: {
      en: "A Torch in the Hand",
      ru: "Факел в руке "
    },
    description: {
      en: "If your inventory is full, Dweep cannot pick up any more items.",
      ru: "Если ваш инвентарь полон, Двип не сможет больше подбирать предметы."
    },
    initCharPosition: {
      x: 8,
      y: 3,
    },
  },

  13: {
    title: {
      en: "Fear No Lasers",
      ru: "Не бойтесь лазеров"
    },
    description: {
      en: "Dweep can move vertically and horizontally.",
      ru: "Двип может двигаться по вертикали и горизонтали."
    },
    initCharPosition: {
      x: 2,
      y: 9,
    },
  },

  14: {
    title: {
      en: "Dweep on a Hot Tin Roof",
      ru: "Двип на раскаленной оловянной крыше"
    },
    description: {
      en: "If Dweep steps onto a heat plate, Dweep will inflate and will be unable to move. A wet Dweep can cross a heat plate without inflating.",
      ru: "Если Двип наступит на нагревательную пластину, Двип надуется и не сможет двигаться. Мокрый Двип может пересечь нагревательную пластину, не надуваясь."
    },
    initCharPosition: {
      x: 14,
      y: 4,
    },
  },

  15: {
    title: {
      en: "Icy Hot",
      ru: "Горячо-холодно"
    },
    description: {
      en: "A water bucket can bring a floating Dweep back down to the ground.",
      ru: "Ведро с водой может вернуть парящего Двипа на землю."
    },
    initCharPosition: {
      x: 14,
      y: 2,
    },
  },

  16: {
    title: {
      en: "Laser Death Zone",
      ru: "Лазерная зона смерти"
    },
    description: {
      en: "Use a wernch to rotate a mirror or a laser.",
      ru: "Используйте гаечный ключ, чтобы повернуть зеркало или лазер."
    },
    initCharPosition: {
      x: 1,
      y: 2,
    },
  },

  17: {
    title: {
      en: "Bounty Hunter",
      ru: "Охотник за головами"
    },
    description: {
      en: "A water bucket can bring a floating Dweep back down to the ground.",
      ru: "Ведро с водой может вернуть парящего Двипа на землю."
    },
    initCharPosition: {
      x: 1,
      y: 10,
    },
  },

  18: {
    title: {
      en: "Attitude",
      ru: "Позиция"
    },
    description: {
      en: "A torch or a laser can light a bomb`s fuse. An exploding bomb will cause adjacent bombs to explode as well.",
      ru: "Факел или лазер могут зажечь запал бомбы. Взрыв бомбы вызовет взрыв соседних бомб."
    },
    initCharPosition: {
      x: 8,
      y: 5,
    },
  },

  19: {
    title: {
      en: "Hole in One",
      ru: "Попадание с одного раза"
    },
    description: {
      en: "An exploding bomb will destroy all adjacent object, including lasers and mirrors",
      ru: "Взрывающаяся бомба уничтожит все прилегающие объекты, включая лазеры и зеркала."
    },
    initCharPosition: {
      x: 1,
      y: 10,
    },
  },

  20: {
    title: {
      en: "Gridlock",
      ru: "Затор"
    },
    description: {
      en: "Use mirrors to destroy lasers or deflect laser beams.",
      ru: "Используйте зеркала, чтобы уничтожить лазеры или отклонить лазерные лучи."
    },
    initCharPosition: {
      x: 2,
      y: 2,
    },
  },

  21: {
    title: {
      en: "Natural Selection",
      ru: "Естественный отбор"
    },
    description: {
      en: "Adjacent bombs can cause a massive chain reaction when one of them explodes.",
      ru: "Бомбы могут вызывать цепную реакцию."
    },
    initCharPosition: {
      x: 5,
      y: 7,
    },
  }
};

export default LEVELS;
