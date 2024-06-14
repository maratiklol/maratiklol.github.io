function copyDiscord() {
    var dsc = "exteragram"
    navigator.clipboard.writeText(dsc);
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'discord username @exteragram',
        footer: 'Copied!',
        showConfirmButton: false,
      });
}

function copyTinkoffCard() {
    var cardnum = "2200 7008 1875 2163"
    navigator.clipboard.writeText(cardnum);
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Tinkoff Card Number',
        footer: 'Copied!',
        showConfirmButton: false,
      });
  }

  