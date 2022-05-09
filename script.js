const testiContainer = document.querySelector(".testimonial_container");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user_image");
const username = document.querySelector(".username");
const userRole = document.querySelector(".user_role");

const testimonials = [
  {
    name: "Metehan Adanur",
    role: "Teacher",
    photo: "https://www.mauksch.de/wp-content/uploads/2018/02/img-07.jpg",
    text: " accusamus perferendis molestias asperiores? Voluptatum dolores magn consectetur, harum totam ipsam laudantium accusamus error fugiat quo,alias laboriosam molestiae repellendus. Quidem, dolore officia vitae asperiores eum quisquam qui fugiat iste.",
  },
  {
    name: "Brad Pitt",
    role: "Actor",
    photo: "https://image.gala.de/22541272/t/8E/v7/w1440/r1.5/-/brad-pitt.jpg",
    text: " accusamus perferendis molestias asperiores? Voluptatum dolores magn consectetur, harum totam ipsam laudantium accusamus error fugiat quo,alias laboriosam molestiae repellendus. Quidem, dolore officia vitae asperiores eum quisquam qui fugiat iste.",
  },
  {
    name: "Albert Einstein",
    role: "Wissenschaftler",
    photo:
      "https://media.metaebene.me/media/raumzeit/rz062-albert-einstein.jpg",
    text: " accusamus perferendis molestias asperiores? Voluptatum dolores magn consectetur, harum totam ipsam laudantium accusamus error fugiat quo,alias laboriosam molestiae repellendus. Quidem, dolore officia vitae asperiores eum quisquam qui fugiat iste.",
  },
  {
    name: "Marie Curie",
    role: "Wissenschaftlerin",
    photo:
      "https://www.docusign.de/sites/d8/files/styles/body_max_width/public/2020-08/Marie-cutie.jpg?itok=I2amghTV",
    text: " Der Webentwickler Kurs vom EVB ist sehr gut",
  },
  {
    name: "Messi",
    role: "Fußballer",
    photo:
      "https://image.stern.de/30648296/t/C3/v2/w1440/r1/-/06--lionel-messi--heute-intensive-gespraeche-mit-psg---aufmacher-.jpg",
    text: "nach meiner Karriere werde ich Webentwickler",
  },
  {
    name: "sebastian Vettel",
    role: "Formel 1 Pilot",
    photo:
      "https://www.tz.de/bilder/2022/03/25/91435046/28518664-sebastian-vettel-1lec.jpg",
    text: " accusamus perferendis molestias asperiores? Voluptatum dolores magn consectetur, harum totam ipsam laudantium accusamus error fugiat quo,alias laboriosam molestiae repellendus. Quidem, dolore officia vitae asperiores eum quisquam qui fugiat iste.",
  },
];
var idx = 1;
function updateTestimonial() {

  const { name, role, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userRole.innerHTML = role;
  username.innerHTML = name;
  userImg.src = photo;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 5000);


// erstellt eine Box mit Name und Alter
// input feld wo ihr eine Zahl eintragen könnt
// jede Zahl soll einen bestimmten User zurückgeben