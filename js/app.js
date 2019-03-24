window.addEventListener("load", function (event) {
    Vue.component('ong_config', {
        props: [], 
        template: '#ong_config-template', 
        data: function () {
            return {
                freq_visite : localStorage.getItem("appiculture-freq_visite")
            }
        },
        methods: {
            validate: function () {
                //Sauvegarde des données dans le local storage
                localStorage.setItem("appiculture-freq_visite", this.freq_visite);
            },
            
            save_json: function() {
                console.log("Saving in json file ...")
            },

            import_json: function() {
                console.log("importing json file ...")
            }
        }
    });

    Vue.component('nouv_rucher', {
        props: [], 
        template: '#nouv_rucher-template', 
        data: function () {
            return {
                ruche_id : "",
                ruche_nb : 0,
                ruche_desc : "",
                ruche_freqvisite : 0
            }
        },
        methods: {
            validate: function () {
                let tab_ruche = new Array()

                if(localStorage.getItem("appiculture-ruches")){
                    tab_ruche = JSON.parse(localStorage.getItem("appiculture-ruches"))
                }

                let ruche = {}

                ruche.id = this.ruche_id
                ruche.nb = this.ruche_nb
                ruche.desc = this.ruche_desc
                ruche.freqvisite = this.ruche_freqvisite

                tab_ruche.push(ruche)

                localStorage.setItem("appiculture-ruches", JSON.stringify(tab_ruche))
            },

            check: function(){
                console.log(localStorage.getItem("appiculture-ruches"))
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