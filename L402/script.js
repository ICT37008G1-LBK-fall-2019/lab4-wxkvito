function list() {
    var object = {};
    var array = [{ id: 1, name: "givi" }, { id: 2, name: "givi" }, { id: 3, name: "jemala" }, { id: 4, name: "besarion" },]

    for (let i = 0; i < array.length; i++) {
        if (object[array[i].name] == null) {
            object[array[i].name] = 0;
        }
        object[array[i].name]++;

    }
    console.log(object);
};
list();0