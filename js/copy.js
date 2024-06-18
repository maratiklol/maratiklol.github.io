function copyDiscord() {
    Swal.fire({
        title: "Discord",
        text: "Copy username or open my profile in new tab?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Copy",
        cancelButtonText: "Open profile in new tab"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Copied!",
            text: "Username @exteragram is copied.",
            icon: "success"
        });
        var dsc = "exteragram"
        navigator.clipboard.writeText(dsc);
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
        window.open('https://discord.com/users/1097383143708827679','_blank')
    }
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

  