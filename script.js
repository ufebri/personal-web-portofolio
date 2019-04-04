$(document).ready(function() {
  $("#tableData").DataTable({
    ajax: {
      url: "https://swapi.co/api/people/2/",
      dataSrc: "results"
    },
    columns: [
      { data: "name" },
      { data: "height" },
      { data: "mass" },
      { data: "hair_color" },
      { data: "skin_color" },
      { data: "eye_color" },
      { data: "birth_year" },
      { data: "gender" }
    ]
  });
});
