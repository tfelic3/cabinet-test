

const cabinetPicks = [
	{
		title: 'President',
		name: 'Joe Biden',
		description: 'The President is both the head of state and head of government of the United States of America, and Commander-in-Chief of the armed forces.',
		imgPath: "/img/biden.jpg",
		id: 1
	},

	{
		title: 'Vice President',
		name: 'Kamala Harris',
		description: 'The primary responsibility of the Vice President of the United States is to be ready at a moment’s notice to assume the Presidency if the President is unable to perform his duties.',
		imgPath: '/img/silhoette.png',
		id: 2
	},

	{
		title: 'Secretary of State',
		name: 'Antony Blinken',
		description: 'The Secretary of State serves as the President’s top foreign policy adviser, and oversees 30,000 employees and a budget of approximately $35 billion.',
		imgPath: '/img/blinken.png',
		id: 3
	},

	{
		title: 'Secretary of the Treasury',
		name: 'Janet Yellen',
		description: 'The Department of the Treasury is responsible for promoting economic prosperity and ensuring the soundness and security of the U.S. and international financial systems.',
		imgPath: '/img/yellen.png',
		id: 4
	},

	{
		title: 'Secretary of Defense',
		name: 'Gen. Lloyd Austin',
		description: 'The mission of the Department of Defense (DOD) is to provide the military forces needed to deter war and to protect the security of our country. The department’s headquarters is at the Pentagon.',
		imgPath: '/img/austin.png',
		id: 5
	},

	{
		title: 'Attorney General',
		name: ' ',
		description: 'The mission of the Department of Justice (DOJ) is to enforce the law and defend the interests of the United States according to the law',
		imgPath: '/img/silhoette.png',
		id: 6
	},

	{
		title: 'Secretary of the Interior',
		name: ' ',
		description: 'The Department of the Interior (DOI) is the nation’s principal conservation agency. Its mission is to protect America’s natural resources, offer recreation opportunities, conduct scientific research, conserve and protect fish and wildlife, and honor our trust responsibilities to American Indians, Alaskan Natives, and our responsibilities to island communities.',
		imgPath: '/img/silhoette.png',
		id: 7
	},

	{
		title: 'Secretary of Agriculture',
		name: 'Tom Vilsack',
		description: 'The U.S. Department of Agriculture (USDA) develops and executes policy on farming, agriculture, and food.',
		imgPath: '/img/vilsack.png',
		id: 8
	},

	{
		title: 'Secretary of Commerce',
		name: 'Xavier Becera',
		description: 'The Department of Commerce is the government agency tasked with improving living standards for all Americans by promoting economic development and technological innovation.',
		imgPath: '/img/becerra.png',
		id: 9
	},

	{
		title: 'Secretary of Labor',
		name: ' ',
		description: 'The Department of Labor oversees federal programs for ensuring a strong American workforce. ',
		imgPath: '/img/silhoette.png',
		id: 10
	},

	{
		title: 'Secretary of Health & Human Services',
		name: ' ',
		description: 'The Department of Health and Human Services (HHS) is the United States government’s principal agency for protecting the health of all Americans and providing essential human services, especially for those who are least able to help themselves. ',
		imgPath: '/img/silhoette.png',
		id: 11
	},

	{
		title: 'Secretary of Housing & Urban Development',
		name: 'Marcia Fudge',
		description: 'The Department of Housing and Urban Development (HUD) is the federal agency responsible for national policies and programs that address America’s housing needs, that improve and develop the nation’s communities, and that enforce fair housing laws. ',
		imgPath: '/img/fudge.png',
		id: 12,
	},

	{
		title: 'Secretary of Transportation',
		name: ' ',
		description: 'The mission of the Department of Transportation (DOT) is to ensure a fast, safe, efficient, accessible and convenient transportation system that meets our vital national interests and enhances the quality of life of the American people.',
		imgPath: '/img/silhoette.png',
		id: 13,
	},

	{
		title: 'Secretary of Energy',
		name: ' ',
		description: 'The mission of the Department of Energy (DOE) is to advance the national, economic, and energy security of the United States.',
		imgPath: '/img/silhoette.png',
		id: 14,
	},

	{
		title: 'Secretary of Education',
		name: ' ',
		description: 'The mission of the Department of Education is to promote student achievement and preparation for competition in a global economy by fostering educational excellence and ensuring equal access to educational opportunity.',
		imgPath: '/img/silhoette.png',
		id: 15
	},
	{
		title: 'Secretary of Homeland Security',
		name: 'Alejandro Mayorkas',
		description: 'The missions of the Department of Homeland Security are to prevent and disrupt terrorist attacks; protect the American people, our critical infrastructure, and key resources; and respond to and recover from incidents that do occur. ',
		imgPath: 'img/mayorkas.png',
		id: 17
	},

		{
		title: 'Secretary of Veterans Affairs',
		name: 'Denis McDonough',
		description: 'The Department of Veterans Affairs is responsible for administering benefit programs for veterans, their families, and their survivors.',
		imgPath: '/img/mcdonough.png',
		id: 16
	},

		
	
];





export function getCandidates() {
	return cabinetPicks;
}
