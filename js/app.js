window.addEventListener("load", function (event) {
    Vue.component('ong_config', {
        props: [], 
        template: '#ong_config-template', 
        data: function () {
            return {
                freq_visite : localStorage.getItem("appiculture_freq_visite")
            }
        },
        methods: {
            validate: function () {
                //Sauvegarde des données dans le local storage
                localStorage.setItem("appiculture_freq_visite", this.freq_visite);
            },
            
            save_json: function() {
                console.log("Saving in json file ...")
            },

            import_json: function() {
                console.log("importing json file ...")
            }
        }
    });

	var App = new Vue({
		el: "#app",
		data: {

		},
        methods: {
        }
	});



});