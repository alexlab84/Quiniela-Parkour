import { useState } from 'react';

 const partidos = 
 
 [
      {
        "local": "Athletic Bilbao",
        "visitante": "Getafe CF"
      },
      {
        "local": "Real Betis Balompié",
        "visitante": "Girona FC"
      },
      {
        "local": "RC Celta de Vigo",
        "visitante": "Deportivo Alavés"
      },
      {
        "local": "UD Las Palmas",
        "visitante": "Sevilla FC"
      },
      {
        "local": "CA Osasuna",
        "visitante": "CD Leganés"
      },
      {
        "local": "Real Madrid",
        "visitante": "Valencia CF"
      },
      {
        "local": "FC Barcelona",
        "visitante": "Atlético de Madrid"
      },
      {
        "local": "Villarreal CF",
        "visitante": "Real Sociedad"
      },
      {
        
        "local": "Levante UD",
        "visitante": "Espanyol"
      },
      {
        "local": "Real Valladolid",
        "visitante": "Mallorca"
      },
      {
        "local": "Cádiz CF",
        "visitante": "Granada CF"
      },
      {
        "local": "Rayo Vallecano",
        "visitante": "Huesca"
      },
      {
        "local": "Elche CF",
        "visitante": "Almería"
      },
      {
        "local": "Real Zaragoza",
        "visitante": "Sporting de Gijón"
      },
      {
        "local": "Málaga CF",
        "visitante": "Tenerife"
      }
    ]
 
  
const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (user && pass === 'admin') {
            setIsAuthenticated(true)
           
            
        } else {
            console.log('Usuario o contraseña incorrectos');
            setIsAuthenticated(false)
        }
    }

    return (
        <div className="login-container">
            {!isAuthenticated ? (
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label className='labelLogin' htmlFor="username">Usuario</label>
                    <input className='inputLogin'
                        type="text" 
                        id="username" 
                        value={user} 
                        onChange={(ev) => setUser(ev.currentTarget.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className='labelLogin' htmlFor="password">Contraseña</label>
                    <input className='inputLogin'
                        type="password" 
                        id="password" 
                        value={pass} 
                        onChange={(ev) => setPass(ev.currentTarget.value)} 
                        required 
                        
                    />
                </div>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
            ) : (
                <div className="partidos-list">
                    <h2>Lista de Partidos</h2>
                    <ol className='partidosListOl'>
                        {partidos.map((partido, index) => (
                            <li className='listaEquipos' key={index}>
                                {partido.local} - {partido.visitante}
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input className='inputApuesta' type="checkbox" value={'1'} name={`match-${index}-1`} /> 
                                        <span className="custom-checkbox">1</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input className='inputApuesta' type="checkbox" name={`match-${index}-X`} /> 
                                        <span className="custom-checkbox">X</span>
                                    </label>
                                    <label className="checkbox-label">
                                        <input className='inputApuesta' type="checkbox" name={`match-${index}-2`} /> 
                                        <span className="custom-checkbox">2</span>
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ol>
                    <input className="submit-button" type="submit" value='Enviar'/>
                </div>
            )}
        </div>
    );
};

export default Login;







// {    
//     'jornada': 1,
//     'partidos': [
//         {
//           "local": "Athletic Bilbao",
//           "visitante": "Getafe CF"
//         },
//         {
//           "local": "Real Betis Balompié",
//           "visitante": "Girona FC"
//         },
//         {
//           "local": "RC Celta de Vigo",
//           "visitante": "Deportivo Alavés"
//         },
//         {
//           "local": "UD Las Palmas",
//           "visitante": "Sevilla FC"
//         },
//         {
//           "local": "CA Osasuna",
//           "visitante": "CD Leganés"
//         },
//         {
//           "local": "Real Madrid",
//           "visitante": "Valencia CF"
//         },
//         {
//           "local": "FC Barcelona",
//           "visitante": "Atlético de Madrid"
//         },
//         {
//           "local": "Villarreal CF",
//           "visitante": "Real Sociedad"
//         },
//         {
          
//           "local": "Levante UD",
//           "visitante": "Espanyol"
//         },
//         {
//           "local": "Real Valladolid",
//           "visitante": "Mallorca"
//         },
//         {
//           "local": "Cádiz CF",
//           "visitante": "Granada CF"
//         },
//         {
//           "local": "Rayo Vallecano",
//           "visitante": "Huesca"
//         },
//         {
//           "local": "Elche CF",
//           "visitante": "Almería"
//         },
//         {
//           "local": "Real Zaragoza",
//           "visitante": "Sporting de Gijón"
//         },
//         {
//           "local": "Málaga CF",
//           "visitante": "Tenerife"
//         }
//       ]
// }