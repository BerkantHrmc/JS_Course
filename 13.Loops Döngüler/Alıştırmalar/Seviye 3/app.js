/*

countries arrayinden "land" sözüğü ile biten ülkeleri farklı bir diziye atayın
countries array inden en uzun karakterli ülkeyi bulun
countries array inde 4 karakterli ülkeleri yazdırın
countries array inde iki veya daha fazla kelime içieren ülkeleri farklı bir diziye atayın
countries array i ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin

*/

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

//-------------------------------------land ile biten ülkeler-----------------------------

const landCountries = [];

for (let countrie of countries ) 
{
    if (countrie.slice(-4)==="land"){ //sonu land ile bitenleri seçtim
        landCountries.push(countrie)    //yeni dizime pushladım
    }
    
}

console.log(landCountries); 

//------------------------------en uzun karakterli ülke------------------------------------

let mostlengCountr = countries[0]

for (i=1 ; i<countries.length ; i++ ) 
{

        if (countries[i].length>=mostlengCountr.length){

            mostlengCountr = countries[i];
        }

    
}

console.log(mostlengCountr);

//------------------------------4 karakterli ülkeler------------------------------------

let fourChaCoun = [];

for (let countrie of countries) {

    if(countrie.length == 4){
        fourChaCoun.push(countrie);
    }
}
console.log(fourChaCoun);

//------------countries array inde iki veya daha fazla kelime içieren ülkeleri farklı bir diziye atayın--------------

const mostWordCoun = [];
for (let countrie of countries) {

let newArr = []
newArr = countrie.split(" ");

if (newArr.length>1) {
  mostWordCoun.push(countrie)
}
  
}

console.log(mostWordCoun);


//-----countries array i ters çevirin ve ülkelerin tüm harflerini büyük hale gertirin-------

const revCountries = countries.reverse();
let stringCoun = revCountries.toString();
const biggcountr = stringCoun.toUpperCase().split(",");
console.log(biggcountr);
