// Datos para las tablas de divisiones
// SOLO necesitas actualizar: played, wins, draws, losses
// Los points se calculan AUTOMÁTICAMENTE
const divisionsData = {
    first: [
        { team: "Pantheon's Black",     played: 4, wins: 2, draws: 1, losses: 1},

        { team: "Pantheon's Underlock", played: 4, wins: 1, draws: 1, losses: 2 },

        { team: "Nikabida",             played: 4, wins: 1, draws: 0, losses: 3 },

        { team: "Squad Fénix",          played: 4, wins: 2, draws: 1, losses: 1 },

        { team: "Fracture Gaming",      played: 4, wins: 2, draws: 0, losses: 2 },

        { team: "Fénix Rawr",           played: 4, wins: 0, draws: 0, losses: 4 },

        { team: "Night Hunters",        played: 4, wins: 2, draws: 0, losses: 2 },

        { team: "Pantheons Pride",      played: 4, wins: 1, draws: 0, losses: 3 },

        { team: "Kosmos Khaos",         played: 4, wins: 1, draws: 1, losses: 0 },

        { team: "Sector Z",             played: 4, wins: 4, draws: 0, losses: 0 },

        { team: "Eleven Starboy",       played: 4, wins: 1, draws: 0, losses: 3 },

        { team: "Exilium One",          played: 4, wins: 3, draws: 0, losses: 1 }
    ],

    second: [
        { team: "Night Hunters Rise",   played: 4, wins: 1, draws: 3, losses: 0 },

        { team: "Entity7",              played: 4, wins: 1, draws: 1, losses: 2 },

        { team: "Fénix Yokai",          played: 4, wins: 4, draws: 0, losses: 0 },

        { team: "Pantheons Wrath",      played: 4, wins: 2, draws: 2, losses: 0 },

        { team: "Pantheons Eclipse",    played: 4, wins: 2, draws: 0, losses: 2 },

        { team: "Exilium Tatsu",        played: 4, wins: 1, draws: 2, losses: 1 },

        { team: "Shohoku Stars",        played: 4, wins: 3, draws: 0, losses: 1 },

        { team: "WoW Esports",          played: 4, wins: 1, draws: 1, losses: 2 },

        { team: "Synergy",              played: 4, wins: 2, draws: 1, losses: 1 },

        { team: "King Kao",             played: 4, wins: 0, draws: 0, losses: 4 },

        { team: "S2 Showmatch",         played: 4, wins: 1, draws: 1, losses: 2 },

        { team: "Agni Kai Esports",     played: 4, wins: 2, draws: 1, losses: 1 }
    ],

    third: [
        { team: "Kosmos",               played: 4, wins: 3, draws: 1, losses: 0 },

        { team: "Five Furious",         played: 4, wins: 2, draws: 0, losses: 2 },

        { team: "Night Hunters Arise",  played: 4, wins: 0, draws: 1, losses: 3 },

        { team: "Abyss Of Shadows",     played: 4, wins: 2, draws: 1, losses: 1 },

        { team: "Kings Slayers",        played: 4, wins: 0, draws: 0, losses: 4 },

        { team: "Exilium Kings",        played: 4, wins: 0, draws: 0, losses: 4 },

        { team: "Misty Haze",           played: 4, wins: 4, draws: 0, losses: 0 },

        { team: "Mean Girls 2",         played: 4, wins: 3, draws: 0, losses: 1 },

        { team: "Kinshi",               played: 4, wins: 2, draws: 0, losses: 2 },

        { team: "Beastmode",            played: 4, wins: 3, draws: 0, losses: 1 },

        { team: "Nexus Prime",          played: 4, wins: 3, draws: 1, losses: 0 },

        { team: "Backtime",             played: 4, wins: 0, draws: 0, losses: 4 }
    ],
    
    fourth: [
        { team: "Kosmos Gala",          played: 4, wins: 0, draws: 0, losses: 4 },

        { team: "Silent Oportunity",    played: 4, wins: 2, draws: 2, losses: 0 },

        { team: "Exilium Reign",        played: 4, wins: 1, draws: 0, losses: 3 },

        { team: "White Lions",          played: 4, wins: 2, draws: 1, losses: 1 },

        { team: "Harakiri",             played: 4, wins: 3, draws: 1, losses: 0 },

        { team: "Temperance Beta",      played: 4, wins: 0, draws: 2, losses: 2 },

        { team: "White Lions Fly",      played: 4, wins: 3, draws: 1, losses: 0 },

        { team: "KAMYKAZEZ",            played: 4, wins: 0, draws: 1, losses: 3 },

        { team: "Argentum",             played: 4, wins: 1, draws: 1, losses: 2 },

        { team: "M7",                   played: 4, wins: 3, draws: 1, losses: 0 },
    ]
};

// Función para calcular puntos automáticamente (3 por victoria, 1 por empate)
function calculatePoints(team) {
    return (team.wins * 3) + (team.draws * 1);
}

// Función para procesar los datos de una división (agrega puntos calculados)
function processDivisionData(data) {
    return data.map(team => ({
        ...team,
        points: calculatePoints(team)
    }));
}

// Función para cargar una tabla de división
function loadDivisionTable(divisionId, data) {
    console.log(`Cargando datos para: ${divisionId}`, data);
    const tableBody = document.getElementById(`${divisionId}-division-data`);
    if (!tableBody) {
        console.error(`No se encontró el elemento: ${divisionId}-division-data`);
        return;
    }

    tableBody.innerHTML = '';

    // Procesar los datos para calcular puntos automáticamente
    const processedData = processDivisionData(data);

    // ORDEN AUTOMÁTICO (por puntos, luego wins, luego draws)
    const sortedData = [...processedData].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.wins !== a.wins) return b.wins - a.wins;
        return b.draws - a.draws;
    });

    // Usar DocumentFragment para mejor rendimiento
    const fragment = document.createDocumentFragment();

    sortedData.forEach((team, index) => {
        const position = index + 1;
        const row = document.createElement('tr');
        row.className = 'table-row';

        // Determinar clases según la posición y división
        let positionClass = 'position-badge';
        let rowClass = '';

        if (divisionId === 'first') {
            if (position === 1) {
                positionClass += ' position-1';
            } else if (position === 2) {
                positionClass += ' position-2';
            } else if (position === 3) {
                positionClass += ' position-3';
            } else {
                positionClass += ' bg-gray-800';
            }
            
            if (position <= 3) {
                rowClass = 'position-promotion';
            } else if (position >= 9) {
                rowClass = 'position-relegation';
            }
        } 
        else if (divisionId === 'second') {
            if (position === 1) {
                positionClass += ' position-1';
            } else if (position === 2) {
                positionClass += ' position-2';
            } else {
                positionClass += ' bg-gray-800';
            }
            
            if (position <= 2) {
                rowClass = 'position-promotion';
            } else if (position >= 10) {
                rowClass = 'position-relegation';
            }
        } 
        else if (divisionId === 'third') {
            if (position === 1) {
                positionClass += ' position-1';
            } else if (position === 2) {
                positionClass += ' position-2';
            } else if (position === 3) {
                positionClass += ' position-3';
            } else {
                positionClass += ' bg-gray-800';
            }
            
            if (position <= 3) {
                rowClass = 'position-promotion';
            } else if (position >= 10) {
                rowClass = 'position-relegation';
            }
        }
        else if (divisionId === 'fourth') {
            if (position === 1) {
                positionClass += ' position-1';
            } else if (position === 2) {
                positionClass += ' position-2';
            } else {
                positionClass += ' bg-gray-800';
            }
            
            if (position <= 2) {
                rowClass = 'position-promotion';
            }
        }

        if (rowClass) {
            row.classList.add(rowClass);
        }

        // Crear la fila con la nueva columna de empates
        row.innerHTML = `
            <td class="py-3 px-4">
                <div class="flex items-center">
                    <div class="${positionClass} mr-2 lg:mr-3">
                        ${position}
                    </div>
                </div>
            </td>
            <td class="py-3 px-4 font-semibold">${team.team}</td>
            <td class="py-3 px-4 text-center text-white/70">${team.played}</td>
            <td class="py-3 px-4 text-center text-green-400">${team.wins}</td>
            <td class="py-3 px-4 text-center text-yellow-400">${team.draws}</td>
            <td class="py-3 px-4 text-center text-red-400">${team.losses}</td>
            <td class="py-3 px-4 text-center font-bold text-lg text-white">${team.points}</td>
        `;

        fragment.appendChild(row);
    });

    tableBody.appendChild(fragment);
    console.log(`✅ Datos cargados correctamente para: ${divisionId} (${sortedData.length} equipos)`);
}

// Función para cambiar entre divisiones
function switchDivision(division) {
    console.log(`Cambiando a división: ${division}`);
    
    // Actualizar botones activos
    document.querySelectorAll('.division-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botón seleccionado
    const activeBtn = document.querySelector(`[data-division="${division}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Ocultar todas las tablas
    document.querySelectorAll('.division-table').forEach(table => {
        table.classList.add('hidden');
    });
    
    // Mostrar la tabla seleccionada
    const selectedTable = document.getElementById(`${division}-division-table`);
    if (selectedTable) {
        selectedTable.classList.remove('hidden');
        
        // Cargar los datos si no están cargados ya
        const tbody = document.getElementById(`${division}-division-data`);
        if (tbody && tbody.children.length === 0) {
            console.log(`Cargando datos para ${division} por primera vez`);
            loadDivisionTable(division, divisionsData[division]);
        } else {
            console.log(`Datos de ${division} ya estaban cargados (${tbody.children.length} equipos)`);
        }
    } else {
        console.error(`No se encontró la tabla: ${division}-division-table`);
    }
}

// Función para manejar el menú móvil
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            this.setAttribute('aria-expanded', !isHidden);
        });
    }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando Divisiones JS');
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Verificar que los elementos existen
    console.log('Verificando elementos:');
    console.log('- first-division-data:', document.getElementById('first-division-data') ? '✅' : '❌');
    console.log('- second-division-data:', document.getElementById('second-division-data') ? '✅' : '❌');
    console.log('- third-division-data:', document.getElementById('third-division-data') ? '✅' : '❌');
    console.log('- fourth-division-data:', document.getElementById('fourth-division-data') ? '✅' : '❌');
    
    // Cargar datos de la primera división por defecto
    loadDivisionTable('first', divisionsData.first);
    
    // Configurar eventos para los botones de división
    const buttons = document.querySelectorAll('.division-btn');
    console.log(`Encontrados ${buttons.length} botones de división`);
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const division = this.dataset.division;
            switchDivision(division);
        });
    });
    
    console.log('✅ Inicialización completa');
});

// Hacer las funciones accesibles globalmente (por si acaso)
window.divisionsData = divisionsData;
window.loadDivisionTable = loadDivisionTable;
window.switchDivision = switchDivision;
window.calculatePoints = calculatePoints;