// Datos para las tablas de divisiones
// SOLO necesitas actualizar: played, wins, draws, losses
// Los points se calculan AUTOMÁTICAMENTE
const divisionsData = {
    first: [
        { team: "Pantheon's Black", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Pantheon's Underlock", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Nikabida", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Squad Fénix", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Fracture Gaming", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Fénix Rawr", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Night Hunters", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Pantheons Pride", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Kosmos Khaos", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Sector Z", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Eleven Starboy", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Exilium One", played: 0, wins: 0, draws: 0, losses: 0 }
    ],

    second: [
        { team: "Night Hunters Rise", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Entity7", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Fénix Yokai", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Pantheons Wrath", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Pantheons Eclipse", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Exilium Tatsu", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Shohoku Stars", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "WoW Esports", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Synergy", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "King Kao", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "S2 Showmatch", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Agni Kai Esports", played: 0, wins: 0, draws: 0, losses: 0 }
    ],

    third: [
        { team: "Kosmos", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Five Furious", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Night Hunters Arise", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Abyss Of Shadows", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Kings Slayers", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Exilium Kings", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Misty Haze", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Mean Girls 2", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Kinshi", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Beastmode", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Nexus Prime", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Backtime", played: 0, wins: 0, draws: 0, losses: 0 }
    ],
    
    fourth: [
        { team: "Kosmos Gala", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Silent Oportunity", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Exilium Reign", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "White Lions", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Harakiri", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Temperance Beta", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "White Lions Fly", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "KAMYKAZEZ", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "La alianza", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "Argentum", played: 0, wins: 0, draws: 0, losses: 0 },
        { team: "M7", played: 0, wins: 0, draws: 0, losses: 0 },
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