const initState = {
  guitars: [
    {
      id: 1,
      type: "electric",
      name: "Squier By Fender Vintage BLK",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 380,
      img: "stratEbony",
    },
    {
      id: 2,
      type: "electric",
      name: "Squier By Fender Vintage SFG",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 367,
      img: "stratLight",
    },
    {
      id: 3,
      type: "electric",
      name: "Epiphone Les Paul Ultra-III",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 780,
      img: "epiEbony",
    },
    {
      id: 4,
      type: "electric",
      name: "Epiphone Les Paul Tribute",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 780,
      img: "epiChery",
    },
    {
      id: 5,
      type: "electric",
      name: "Ibanez RG721RW-CNF  ",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 800,
      img: "ibanezBrown",
    },
    {
      id: 6,
      type: "electric",
      name: "Ibanez SA360QM-TRB  ",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 540,
      img: "ibanezRed",
    },
    {
      id: 7,
      type: "acoustic",
      name: "Takamine GD71-BSB",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 350,
      img: "takamine",
    },
    {
      id: 8,
      type: "acoustic",
      name: "Yamaha FJX720SC Black",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 559,
      img: "yamahaBlack",
    },
    {
      id: 9,
      type: "acoustic",
      name: "Yamaha FS720S Natural",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 390,
      img: "yamahaNatural",
    },
    {
      id: 10,
      type: "acoustic",
      name: "Martin GPCX1AE",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 1180,
      img: "martinNatural",
    },
    {
      id: 11,
      type: "acoustic",
      name: "Martin 000RS1  ",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 1140,
      img: "martinSapele",
    },
    {
      id: 12,
      type: "acoustic",
      name: "Ibanez AW300ECE-NT ",
      text: `With a body based off of one of the most notable guitars in history and dressed in vintage white, the Squier Vintage Modified ‘70s Stratocaster electric guitar looks wonderfully familiar. Squier tweaks the classic to give it a custom look and feel. Modified means adding new twists to familiar designs. Squier's Vintage Modified series excels at just that, imparting hot-output chop-shop sound, feel and value to traditional instrument designs.`,
      description: [
        `Model #: 1148100559, Series: Standard, Body: Alder, Neck Material: Maple, Neck Shape: Modern "C", Scale Length: 25.5" (648 mm), Fingerboard: Rosewood, Number of Frets: 22, Frets Size: Medium Jumbo, Bridge Pickup: Hot Vintage Alnico Humbucking, Neck Pickup: Hot Vintage Alnico Humbucking, ontrols: Master Volume, Tone 1. (Neck Pickup), Tone 2. (Middle Pickup), Bridge: Floyd Rose® Special Double Locking 2-Point Tremolo.`,
      ],
      price: 440,
      img: "ibanezNatural",
    },
  ],
  displayInstrument: {},
  inCart: [],
  itemAddedToCart: {},
  personalInfo: {},
  buy: [],
};

export default initState;
