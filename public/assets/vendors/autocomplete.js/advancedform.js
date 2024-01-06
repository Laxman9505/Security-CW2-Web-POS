var multiSelectBasic = document.getElementById("multiselect-basic");
multiSelectBasic && multi(multiSelectBasic, { enable_search: !1 });
var multiSelectHeader = document.getElementById("multiselect-header");
multiSelectHeader &&
  multi(multiSelectHeader, {
    non_selected_header: "Location",
    selected_header: "Best Location",
  });

  autocompletelocation = new autoComplete({
    selector: "#autocompletelocation",
    placeHolder: "Search for Locations...",
    data: {
      src: [
        "Brilliant Store	",
        "abc",
   
      ],
      cache: !0,
    },
    resultsList: {
      element: function (e, t) {
        var l;
        t.results.length ||
          ((l = document.createElement("div")).setAttribute(
            "class",
            "no_result"
          ),
          (l.innerHTML =
            '<span>Found No Results for "' + t.query + '"</span>'),
          e.prepend(l));
      },
      noResults: !0,
    },
    resultItem: { highlight: !0 },
    events: {
      input: {
        selection: function (e) {
          e = e.detail.selection.value;
          autoCompleteCars.input.value = e;
        },
      },
    },
  });