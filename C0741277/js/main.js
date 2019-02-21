// Your code here!
var bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false,
};
var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true,
};
bear = JSON.parse(JSON.stringify(bird));
bear.genus = "ursus";
bear;
bird;

var cities = [
    'Brampton',
    'Toronto',
    'Missisauga',
    'North York',
];