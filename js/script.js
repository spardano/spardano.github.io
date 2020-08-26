//event pada saat link klik
$(".page-scroll").on("click", function (e) {
  //ambil isi href
  var tujuan = $(this).attr("href");

  //tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 50,
    },
    1250
  );

  e.preventDefault();
});
