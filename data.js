let result;
//take the var data and its
let data = [{
		"state": "Alabama",
		"vaginal_insured": "$4,129.44",
		"vaginal_uninsured": "$9,013.88",
		"c_insured": "$5,189.53",
		"c_uninsured": "$12,593.60"
  },
	{
		"state": "Alaska",
		"vaginal_insured": "$9,094.51",
		"vaginal_uninsured": "$19,775.79",
		"c_insured": "$13,564.19",
		"c_uninsured": "$28,491.95"
  },
	{
		"state": "Arizona",
		"vaginal_insured": "$6,124.20",
		"vaginal_uninsured": "$12,930.96",
		"c_insured": "$8,699.51",
		"c_uninsured": "$18,299.01"
  },
	{
		"state": "Arkansas",
		"vaginal_insured": "$4,538.06",
		"vaginal_uninsured": "$10,062.24",
		"c_insured": "$5,671.21",
		"c_uninsured": "$13,610.95"
  },
	{
		"state": "California",
		"vaginal_insured": "$6,080.29",
		"vaginal_uninsured": "$13,081.32",
		"c_insured": "$8,490.65",
		"c_uninsured": "$19,001.81"
  },
	{
		"state": "Colorado",
		"vaginal_insured": "$5,901.53",
		"vaginal_uninsured": "$12,549.70",
		"c_insured": "$7,216.57",
		"c_uninsured": "$16,574.70"
  },
	{
		"state": "Connecticut",
		"vaginal_insured": "$6,677.45",
		"vaginal_uninsured": "$14,583.66",
		"c_insured": "$9,222.86",
		"c_uninsured": "$20,410.99"
  },
	{
		"state": "Delaware",
		"vaginal_insured": "$4,954.35",
		"vaginal_uninsured": "$10,933.21",
		"c_insured": "$6,710.30",
		"c_uninsured": "$15,820.97"
  },
	{
		"state": "Florida",
		"vaginal_insured": "$6,532.05",
		"vaginal_uninsured": "$13,923.95",
		"c_insured": "$8,349.61",
		"c_uninsured": "$18,864.02"
  },
	{
		"state": "Georgia",
		"vaginal_insured": "$5,754.51",
		"vaginal_uninsured": "$12,447.83",
		"c_insured": "$7,246.88",
		"c_uninsured": "$16,602.23"
  },
	{
		"state": "Hawaii",
		"vaginal_insured": "$4,710.02",
		"vaginal_uninsured": "$10,332.87",
		"c_insured": "$6,087.25",
		"c_uninsured": "$14,530.95"
  },
	{
		"state": "Idaho",
		"vaginal_insured": "$4,703.89",
		"vaginal_uninsured": "$10,476.10",
		"c_insured": "$5,987.01",
		"c_uninsured": "$14,147.39"
  },
	{
		"state": "Illinois",
		"vaginal_insured": "$6,599.68",
		"vaginal_uninsured": "$14,047.36",
		"c_insured": "$8,226.46",
		"c_uninsured": "$18,425.98"
  },
	{
		"state": "Indiana",
		"vaginal_insured": "$5,489.73",
		"vaginal_uninsured": "$11,837.14",
		"c_insured": "$7,136.59",
		"c_uninsured": "$16,465.34"
  },
	{
		"state": "Iowa",
		"vaginal_insured": "$4,805.08",
		"vaginal_uninsured": "$10,452.98",
		"c_insured": "$6,379.57",
		"c_uninsured": "$14,955.90"
  },
	{
		"state": "Kansas",
		"vaginal_insured": "$4,650.24",
		"vaginal_uninsured": "$10,216.65",
		"c_insured": "$5,754.53",
		"c_uninsured": "$13,887.42"
  },
	{
		"state": "Kentucky",
		"vaginal_insured": "$4,838.93",
		"vaginal_uninsured": "$10,485.97",
		"c_insured": "$6,436.20",
		"c_uninsured": "$15,055.99"
  },
	{
		"state": "Louisiana",
		"vaginal_insured": "$4,477.55",
		"vaginal_uninsured": "$9,887.10",
		"c_insured": "$6,066.45",
		"c_uninsured": "$14,405.24"
  },
	{
		"state": "Maine",
		"vaginal_insured": "$4,805.50",
		"vaginal_uninsured": "$10,685.24",
		"c_insured": "$6,167.99",
		"c_uninsured": "$14,641.75"
  },
	{
		"state": "Maryland",
		"vaginal_insured": "$5,311.88",
		"vaginal_uninsured": "$11,820.32",
		"c_insured": "$7,404.19",
		"c_uninsured": "$16,973.33"
  },
	{
		"state": "Massachusetts",
		"vaginal_insured": "$6,668.26",
		"vaginal_uninsured": "$14,618.17",
		"c_insured": "$7,985.89",
		"c_uninsured": "$18,088.29"
  },
	{
		"state": "Michigan",
		"vaginal_insured": "$4,979.80",
		"vaginal_uninsured": "$10,957.85",
		"c_insured": "$6,236.57",
		"c_uninsured": "$14,651.73"
  },
	{
		"state": "Minnesota",
		"vaginal_insured": "$5,019.87",
		"vaginal_uninsured": "$11,031.86",
		"c_insured": "$6,285.74",
		"c_uninsured": "$14,677.68"
  },
	{
		"state": "Mississippi",
		"vaginal_insured": "$4,778.51",
		"vaginal_uninsured": "$10,430.48",
		"c_insured": "$5,729.57",
		"c_uninsured": "$13,820.24"
  },
	{
		"state": "Missouri",
		"vaginal_insured": "$5,001.99",
		"vaginal_uninsured": "$10,906.82",
		"c_insured": "$6,133.98",
		"c_uninsured": "$14,590.62"
  },
	{
		"state": "Montana",
		"vaginal_insured": "$5,075.42",
		"vaginal_uninsured": "$11,176.59",
		"c_insured": "$5,994.05",
		"c_uninsured": "$14,367.51"
  },
	{
		"state": "Nebraska",
		"vaginal_insured": "$4,387.69",
		"vaginal_uninsured": "$9,611.30",
		"c_insured": "$5,612.38",
		"c_uninsured": "$13,602.12"
  },
	{
		"state": "Nevada",
		"vaginal_insured": "$6,187.58",
		"vaginal_uninsured": "$13,135.05",
		"c_insured": "$7,413.72",
		"c_uninsured": "$16,970.82"
  },
	{
		"state": "New Hampshire",
		"vaginal_insured": "$5,279.52",
		"vaginal_uninsured": "$11,487.32",
		"c_insured": "$8,881.02",
		"c_uninsured": "$19,525.80"
  },
	{
		"state": "New Jersey",
		"vaginal_insured": "$7,918.74",
		"vaginal_uninsured": "$16,674.62",
		"c_insured": "$9,659.54",
		"c_uninsured": "$21,297.28"
  },
	{
		"state": "New Mexico",
		"vaginal_insured": "$5,214.65",
		"vaginal_uninsured": "$11,033.96",
		"c_insured": "$6,612.93",
		"c_uninsured": "$15,406.29"
  },
	{
		"state": "New York",
		"vaginal_insured": "$7,069.35",
		"vaginal_uninsured": "$15,518.68",
		"c_insured": "$9,319.14",
		"c_uninsured": "$20,706.77"
  },
	{
		"state": "North Carolina",
		"vaginal_insured": "$5,440.82",
		"vaginal_uninsured": "$11,848.73",
		"c_insured": "$7,346.00",
		"c_uninsured": "$16,993.96"
  },
	{
		"state": "North Dakota",
		"vaginal_insured": "$5,897.83",
		"vaginal_uninsured": "$13,191.93",
		"c_insured": "$7,283.89",
		"c_uninsured": "$16,711.12"
  },
	{
		"state": "Ohio",
		"vaginal_insured": "$4,903.84",
		"vaginal_uninsured": "$10,609.60",
		"c_insured": "$6,079.16",
		"c_uninsured": "$14,508.64"
  },
	{
		"state": "Oklahoma",
		"vaginal_insured": "$5,229.35",
		"vaginal_uninsured": "$11,287.31",
		"c_insured": "$6,090.54",
		"c_uninsured": "$14,518.31"
  },
	{
		"state": "Oregon",
		"vaginal_insured": "$5,506.05",
		"vaginal_uninsured": "$12,231.67",
		"c_insured": "$6,422.55",
		"c_uninsured": "$15,231.75"
  },
	{
		"state": "Pennsylvania",
		"vaginal_insured": "$5,501.76",
		"vaginal_uninsured": "$12,037.00",
		"c_insured": "$8,166.53",
		"c_uninsured": "$18,184.22"
  },
	{
		"state": "Rhode Island",
		"vaginal_insured": "$4,160.16",
		"vaginal_uninsured": "$9,147.54",
		"c_insured": "$5,668.76",
		"c_uninsured": "$13,761.92"
  },
	{
		"state": "South Carolina",
		"vaginal_insured": "$5,236.12",
		"vaginal_uninsured": "$11,377.81",
		"c_insured": "$7,100.54",
		"c_uninsured": "$16,439.41"
  },
	{
		"state": "South Dakota",
		"vaginal_insured": "$5,054.31",
		"vaginal_uninsured": "$11,175.50",
		"c_insured": "$6,651.26",
		"c_uninsured": "$15,534.41"
  },
	{
		"state": "Tennessee",
		"vaginal_insured": "$5,906.25",
		"vaginal_uninsured": "$12,602.76",
		"c_insured": "$7,599.19",
		"c_uninsured": "$17,198.69"
  },
	{
		"state": "Texas",
		"vaginal_insured": "$6,226.39",
		"vaginal_uninsured": "$13,149.87",
		"c_insured": "$8,111.74",
		"c_uninsured": "$18,461.72"
  },
	{
		"state": "Utah",
		"vaginal_insured": "$4,464.57",
		"vaginal_uninsured": "$9,919.41",
		"c_insured": "$5,433.21",
		"c_uninsured": "$13,225.10"
  },
	{
		"state": "Vermont",
		"vaginal_insured": "$5,572.32",
		"vaginal_uninsured": "$12,074.59",
		"c_insured": "$6,376.08",
		"c_uninsured": "$15,103.24"
  },
	{
		"state": "Virginia",
		"vaginal_insured": "$5,571.81",
		"vaginal_uninsured": "$12,065.79",
		"c_insured": "$7,655.13",
		"c_uninsured": "$17,452.53"
  },
	{
		"state": "Washington",
		"vaginal_insured": "$5,360.48",
		"vaginal_uninsured": "$11,769.31",
		"c_insured": "$6,699.42",
		"c_uninsured": "$15,670.46"
  },
	{
		"state": "West Virginia",
		"vaginal_insured": "$4,584.32",
		"vaginal_uninsured": "$10,301.50",
		"c_insured": "$5,853.87",
		"c_uninsured": "$13,893.06"
  },
	{
		"state": "Wisconsin",
		"vaginal_insured": "$7,520.06",
		"vaginal_uninsured": "$15,798.92",
		"c_insured": "$9,945.70",
		"c_uninsured": "$21,703.62"
  },
	{
		"state": "Wyoming",
		"vaginal_insured": "$6,099.28",
		"vaginal_uninsured": "$13,117.31",
		"c_insured": "$7,393.27",
		"c_uninsured": "$16,803.04"
  }
];