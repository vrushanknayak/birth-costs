let result;
//take the var data and its
let data_insured = [{
		"State": "Alabama",
		"Vaginal": "$4,129.44",
		"C-section": "$5,189.53"
  },
	{
		"State": "Alaska",
		"Vaginal": "$9,094.51",
		"C-section": "$13,564.19"
  },
	{
		"State": "Arizona",
		"Vaginal": "$6,124.20",
		"C-section": "$8,168.29"
  },
	{
		"State": "Arkansas",
		"Vaginal": "$4,538.06",
		"C-section": "$5,671.21"
  },
	{
		"State": "California",
		"Vaginal": "$6,080.29",
		"C-section": "$8,490.65"
  },
	{
		"State": "Colorado",
		"Vaginal": "$5,901.53",
		"C-section": "$7,216.57"
  },
	{
		"State": "Connecticut",
		"Vaginal": "$6,677.45",
		"C-section": "$9,222.86"
  },
	{
		"State": "Delaware",
		"Vaginal": "$4,954.35",
		"C-section": "$6,710.30"
  },
	{
		"State": "Florida",
		"Vaginal": "$6,532.05",
		"C-section": "$8,349.61"
  },
	{
		"State": "Georgia",
		"Vaginal": "$5,754.51",
		"C-section": "$7,246.88"
  },
	{
		"State": "Hawaii",
		"Vaginal": "$4,710.02",
		"C-section": "$6,087.25"
  },
	{
		"State": "Idaho",
		"Vaginal": "$4,703.89",
		"C-section": "$5,987.01"
  },
	{
		"State": "Illinois",
		"Vaginal": "$6,599.68",
		"C-section": "$8,226.46"
  },
	{
		"State": "Indiana",
		"Vaginal": "$5,489.73",
		"C-section": "$7,136.59"
  },
	{
		"State": "Iowa",
		"Vaginal": "$4,805.08",
		"C-section": "$6,379.57"
  },
	{
		"State": "Kansas",
		"Vaginal": "$4,650.24",
		"C-section": "$5,754.53"
  },
	{
		"State": "Kentucky",
		"Vaginal": "$4,838.93",
		"C-section": "$6,436.20"
  },
	{
		"State": "Louisiana",
		"Vaginal": "$4,477.55",
		"C-section": "$6,066.45"
  },
	{
		"State": "Maine",
		"Vaginal": "$4,805.50",
		"C-section": "$6,167.99"
  },
	{
		"State": "Maryland",
		"Vaginal": "$5,311.88",
		"C-section": "$7,404.19"
  },
	{
		"State": "Massachusetts",
		"Vaginal": "$6,668.26",
		"C-section": "$7,985.89"
  },
	{
		"State": "Michigan",
		"Vaginal": "$4,979.80",
		"C-section": "$6,236.57"
  },
	{
		"State": "Minnesota",
		"Vaginal": "$5,019.87",
		"C-section": "$6,285.74"
  },
	{
		"State": "Mississippi",
		"Vaginal": "$4,778.51",
		"C-section": "$5,729.57"
  },
	{
		"State": "Missouri",
		"Vaginal": "$5,001.99",
		"C-section": "$6,133.98"
  },
	{
		"State": "Montana",
		"Vaginal": "$5,075.42",
		"C-section": "$5,994.05"
  },
	{
		"State": "Nebraska",
		"Vaginal": "$4,387.69",
		"C-section": "$5,612.38"
  },
	{
		"State": "Nevada",
		"Vaginal": "$6,187.58",
		"C-section": "$7,413.72"
  },
	{
		"State": "New Hampshire",
		"Vaginal": "$5,279.52",
		"C-section": "$8,881.02"
  },
	{
		"State": "New Jersey",
		"Vaginal": "$7,918.74",
		"C-section": "$9,659.54"
  },
	{
		"State": "New Mexico",
		"Vaginal": "$5,214.65",
		"C-section": "$6,612.93"
  },
	{
		"State": "New York",
		"Vaginal": "$7,069.35",
		"C-section": "$9,319.14"
  },
	{
		"State": "North Carolina",
		"Vaginal": "$5,440.82",
		"C-section": "$7,346.00"
  },
	{
		"State": "North Dakota",
		"Vaginal": "$5,897.83",
		"C-section": "$7,283.89"
  },
	{
		"State": "Ohio",
		"Vaginal": "$4,903.84",
		"C-section": "$6,079.16"
  },
	{
		"State": "Oklahoma",
		"Vaginal": "$5,229.35",
		"C-section": "$6,090.54"
  },
	{
		"State": "Oregon",
		"Vaginal": "$5,506.05",
		"C-section": "$6,422.55"
  },
	{
		"State": "Pennsylvania",
		"Vaginal": "$5,501.76",
		"C-section": "$8,166.53"
  },
	{
		"State": "Rhode Island",
		"Vaginal": "$4,160.16",
		"C-section": "$5,668.76"
  },
	{
		"State": "South Carolina",
		"Vaginal": "$5,236.12",
		"C-section": "$7,100.54"
  },
	{
		"State": "South Dakota",
		"Vaginal": "$5,054.31",
		"C-section": "$6,651.26"
  },
	{
		"State": "Tennessee",
		"Vaginal": "$5,906.25",
		"C-section": "$7,599.19"
  },
	{
		"State": "Texas",
		"Vaginal": "$6,226.39",
		"C-section": "$8,111.74"
  },
	{
		"State": "Utah",
		"Vaginal": "$4,464.57",
		"C-section": "$5,433.21"
  },
	{
		"State": "Vermont",
		"Vaginal": "$5,572.32",
		"C-section": "$6,376.08"
  },
	{
		"State": "Virginia",
		"Vaginal": "$5,571.81",
		"C-section": "$7,655.13"
  },
	{
		"State": "Washington",
		"Vaginal": "$5,360.48",
		"C-section": "$6,699.42"
  },
	{
		"State": "West Virginia",
		"Vaginal": "$4,584.32",
		"C-section": "$5,853.87"
  },
	{
		"State": "Wisconsin",
		"Vaginal": "$7,520.06",
		"C-section": "$9,945.70"
  },
	{
		"State": "Wyoming",
		"Vaginal": "$6,099.28",
		"C-section": "$7,393.27"
}
];

let data_uninsured = [{
		"State": "Alabama",
		"Vaginal": "$9,013.88",
		"C-section": "$12,593.60"
  },
	{
		"State": "Alaska",
		"Vaginal": "$19,775.79",
		"C-section": "$28,491.95"
  },
	{
		"State": "Arizona",
		"Vaginal": "$12,930.96",
		"C-section": "$18,299.01"
  },
	{
		"State": "Arkansas",
		"Vaginal": "$10,062.24",
		"C-section": "$13,610.95"
  },
	{
		"State": "California",
		"Vaginal": "$13,081.32",
		"C-section": "$19,001.81"
  },
	{
		"State": "Colorado",
		"Vaginal": "$12,549.70",
		"C-section": "$16,574.70"
  },
	{
		"State": "Connecticut",
		"Vaginal": "$14,583.66",
		"C-section": "$20,410.99"
  },
	{
		"State": "Delaware",
		"Vaginal": "$10,933.21",
		"C-section": "$15,820.97"
  },
	{
		"State": "Florida",
		"Vaginal": "$13,923.95",
		"C-section": "$18,864.02"
  },
	{
		"State": "Georgia",
		"Vaginal": "$12,447.83",
		"C-section": "$16,602.23"
  },
	{
		"State": "Hawaii",
		"Vaginal": "$10,332.87",
		"C-section": "$14,530.95"
  },
	{
		"State": "Idaho",
		"Vaginal": "$10,476.10",
		"C-section": "$14,147.39"
  },
	{
		"State": "Illinois",
		"Vaginal": "$14,047.36",
		"C-section": "$18,425.98"
  },
	{
		"State": "Indiana",
		"Vaginal": "$11,837.14",
		"C-section": "$16,465.34"
  },
	{
		"State": "Iowa",
		"Vaginal": "$10,452.98",
		"C-section": "$14,955.90"
  },
	{
		"State": "Kansas",
		"Vaginal": "$10,216.65",
		"C-section": "$13,887.42"
  },
	{
		"State": "Kentucky",
		"Vaginal": "$10,485.97",
		"C-section": "$15,055.99"
  },
	{
		"State": "Louisiana",
		"Vaginal": "$9,887.10",
		"C-section": "$14,405.24"
  },
	{
		"State": "Maine",
		"Vaginal": "$10,685.24",
		"C-section": "$14,641.75"
  },
	{
		"State": "Maryland",
		"Vaginal": "$11,820.32",
		"C-section": "$16,973.33"
  },
	{
		"State": "Massachusetts",
		"Vaginal": "$14,618.17",
		"C-section": "$18,088.29"
  },
	{
		"State": "Michigan",
		"Vaginal": "$10,957.85",
		"C-section": "$14,651.73"
  },
	{
		"State": "Minnesota",
		"Vaginal": "$11,031.86",
		"C-section": "$14,677.68"
  },
	{
		"State": "Mississippi",
		"Vaginal": "$10,430.48",
		"C-section": "$13,820.24"
  },
	{
		"State": "Missouri",
		"Vaginal": "$10,906.82",
		"C-section": "$14,590.62"
  },
	{
		"State": "Montana",
		"Vaginal": "$11,176.59",
		"C-section": "$14,367.51"
  },
	{
		"State": "Nebraska",
		"Vaginal": "$9,611.30",
		"C-section": "$13,602.12"
  },
	{
		"State": "Nevada",
		"Vaginal": "$13,135.05",
		"C-section": "$16,970.82"
  },
	{
		"State": "New Hampshire",
		"Vaginal": "$11,487.32",
		"C-section": "$19,525.80"
  },
	{
		"State": "New Jersey",
		"Vaginal": "$16,674.62",
		"C-section": "$21,297.28"
  },
	{
		"State": "New Mexico",
		"Vaginal": "$11,033.96",
		"C-section": "$15,406.29"
  },
	{
		"State": "New York",
		"Vaginal": "$15,518.68",
		"C-section": "$20,706.77"
  },
	{
		"State": "North Carolina",
		"Vaginal": "$11,848.73",
		"C-section": "$16,993.96"
  },
	{
		"State": "North Dakota",
		"Vaginal": "$13,191.93",
		"C-section": "$16,711.12"
  },
	{
		"State": "Ohio",
		"Vaginal": "$10,609.60",
		"C-section": "$14,508.64"
  },
	{
		"State": "Oklahoma",
		"Vaginal": "$11,287.31",
		"C-section": "$14,518.31"
  },
	{
		"State": "Oregon",
		"Vaginal": "$12,231.67",
		"C-section": "$15,231.75"
  },
	{
		"State": "Pennsylvania",
		"Vaginal": "$12,037.00",
		"C-section": "$18,184.22"
  },
	{
		"State": "Rhode Island",
		"Vaginal": "$9,147.54",
		"C-section": "$13,761.92"
  },
	{
		"State": "South Carolina",
		"Vaginal": "$11,377.81",
		"C-section": "$16,439.41"
  },
	{
		"State": "South Dakota",
		"Vaginal": "$11,175.50",
		"C-section": "$15,534.41"
  },
	{
		"State": "Tennessee",
		"Vaginal": "$12,602.76",
		"C-section": "$17,198.69"
  },
	{
		"State": "Texas",
		"Vaginal": "$13,149.87",
		"C-section": "$18,461.72"
  },
	{
		"State": "Utah",
		"Vaginal": "$9,919.41",
		"C-section": "$13,225.10"
  },
	{
		"State": "Vermont",
		"Vaginal": "$12,074.59",
		"C-section": "$15,103.24"
  },
	{
		"State": "Virginia",
		"Vaginal": "$12,065.79",
		"C-section": "$17,452.53"
  },
	{
		"State": "Washington",
		"Vaginal": "$11,769.31",
		"C-section": "$15,670.46"
  },
	{
		"State": "West Virginia",
		"Vaginal": "$10,301.50",
		"C-section": "$13,893.06"
  },
	{
		"State": "Wisconsin",
		"Vaginal": "$15,798.92",
		"C-section": "$21,703.62"
  },
	{
		"State": "Wyoming",
		"Vaginal": "$13,117.31",
		"C-section": "$16,803.04"
  }
  ];