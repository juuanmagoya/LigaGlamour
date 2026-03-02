
        // Datos para las tablas de divisiones (sin la propiedad "form")
        const divisionsData = {
    first: [
        { team: "Pantheon's Black", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Underlock", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Nikabida", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Squad Fénix", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Fracture Gaming", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Fénix Rawr", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Night Hunters", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Pantheons Pride", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Kosmos Khaos", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Sector Z", played: 0, wins: 0, losses: 0, points: 0 }
    ],

    second: [
        { team: "Night Hunters Rise", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Entity7", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Fénix Yokai", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Silents Monsters", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Kosmos", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Pantheons Warth", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Pantheons Horda", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Exilium Tatsu", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Shohoku Stats", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Wow Esports", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Synergy", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "King Kao", played: 0, wins: 0, losses: 0, points: 0 }
    ],

    third: [
        { team: "Backtime", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Night Hunters Arise", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Abyss Of Shadows", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Agni Kai Esports", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Gaia", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "King Kao", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Exilium Kings", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Misty Haze", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Mean Girls 2", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Kinshi", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "S2 Showmacht", played: 0, wins: 0, losses: 0, points: 0 },
        { team: "Lanzaba Esa", played: 0, wins: 0, losses: 0, points: 0 }
    ]
};

        // Función para cargar una tabla de división
        function loadDivisionTable(divisionId, data) {
            const tableBody = document.getElementById(`${divisionId}-division-data`);
            tableBody.innerHTML = '';

            // 🔥 ORDEN AUTOMÁTICO
            const sortedData = [...data].sort((a, b) => {
                if (b.points !== a.points) {
                    return b.points - a.points;
                }
                return b.wins - a.wins;
            });

            sortedData.forEach((team, index) => {

                const position = index + 1;

                const row = document.createElement('tr');
                row.className = 'table-row border-b border-gray-800/50';

                let positionClass = '';
                let positionBg = '';

                if (divisionId === 'first') {
                    if (position === 1) {
                        positionClass = 'text-yellow-400 font-bold';
                        positionBg = 'glamour-gradient';
                    } else if (position === 2) {
                        positionClass = 'text-gray-300 font-bold';
                        positionBg = 'bg-gray-800';
                    } else if (position === 3) {
                        positionClass = 'text-amber-700 font-bold';
                        positionBg = 'bg-amber-900/70';
                    } else if (position >= 9) {
                        positionClass = 'text-red-400';
                        positionBg = 'bg-red-900/30';
                    } else {
                        positionBg = 'bg-gray-800';
                    }
                } 
                else if (divisionId === 'second') {
                    if (position <= 2) {
                        positionClass = 'text-green-400 font-bold';
                        positionBg = 'bg-green-900/40';
                    } else if (position >= 10) {
                        positionClass = 'text-red-400';
                        positionBg = 'bg-red-900/30';
                    } else {
                        positionBg = 'bg-gray-800';
                    }
                } 
                else if (divisionId === 'third') {
                    if (position <= 3) {
                        positionClass = 'text-green-400 font-bold';
                        positionBg = 'bg-green-900/40';
                    } else if (position >= 10) {
                        positionClass = 'text-red-400';
                        positionBg = 'bg-red-900/30';
                    } else {
                        positionBg = 'bg-gray-800';
                    }
                }

                row.innerHTML = `
                    <td class="py-3 px-4">
                        <div class="flex items-center">
                            <div class="w-8 h-8 flex items-center justify-center rounded-full ${positionBg} mr-3">
                                <span class="font-bold ${positionClass}">${position}</span>
                            </div>
                        </div>
                    </td>
                    <td class="py-3 px-4 font-bold">${team.team}</td>
                    <td class="py-3 px-4">${team.played}</td>
                    <td class="py-3 px-4 text-green-400">${team.wins}</td>
                    <td class="py-3 px-4 text-red-400">${team.losses}</td>
                    <td class="py-3 px-4 font-bold text-lg">${team.points}</td>
                `;

                tableBody.appendChild(row);
            });
        }

        // Función para cambiar entre divisiones
        function switchDivision(division) {
            // Actualizar botones activos
            document.querySelectorAll('.division-btn').forEach(btn => {
                btn.classList.remove('active');
                
                // Restablecer colores por defecto
                if (btn.dataset.division === 'first') {
                    btn.className = 'division-btn px-5 md:px-6 py-2 md:py-3 rounded-lg bg-purple-900/40 border border-purple-700/50 text-white font-bold text-sm md:text-base';
                } else if (btn.dataset.division === 'second') {
                    btn.className = 'division-btn px-5 md:px-6 py-2 md:py-3 rounded-lg bg-blue-900/40 border border-blue-700/50 text-white font-bold text-sm md:text-base';
                } else if (btn.dataset.division === 'third') {
                    btn.className = 'division-btn px-5 md:px-6 py-2 md:py-3 rounded-lg bg-gray-800/40 border border-gray-700/50 text-white font-bold text-sm md:text-base';
                }
            });
            
            // Activar el botón seleccionado
            const activeBtn = document.querySelector(`[data-division="${division}"]`);
            activeBtn.classList.add('active');
            
            // Ocultar todas las tablas
            document.querySelectorAll('.division-table').forEach(table => {
                table.classList.add('hidden');
            });
            
            // Mostrar la tabla seleccionada con animación
            const selectedTable = document.getElementById(`${division}-division-table`);
            selectedTable.classList.remove('hidden');
            selectedTable.classList.add('table-fade');
            
            // Cargar los datos si no están cargados ya
            if (document.getElementById(`${division}-division-data`).children.length === 0) {
                loadDivisionTable(division, divisionsData[division]);
            }
        }

        // Función para manejar el menú móvil
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Cargar datos iniciales y configurar eventos
        document.addEventListener('DOMContentLoaded', function() {
            // Cargar datos de la primera división por defecto
            loadDivisionTable('first', divisionsData.first);
            
            // Configurar eventos para los botones de división
            document.querySelectorAll('.division-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const division = this.dataset.division;
                    switchDivision(division);
                });
            });
            
            // Inicializar animaciones de entrada
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach(el => {
                el.style.opacity = '1';
            });
        });