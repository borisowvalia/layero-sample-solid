import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <section id="center">
        <div class="hero">
          <img src={heroImg} class="base" width="170" height="179" alt="" />
          <img src={solidLogo} class="framework" alt="Solid logo" />
          <img src={viteLogo} class="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Layero sample — Solid + Vite</h1>
          <p class="subtitle">
            Демо-страница для проверки деплоя: сборка даёт каталог{' '}
            <code>dist/</code>, его и забирает Layero.
          </p>
        </div>
        <button
          type="button"
          class="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Локальный счётчик: {count()}
        </button>
      </section>

      <div class="ticks"></div>

      <section class="demo-body" aria-labelledby="demo-heading">
        <h2 id="demo-heading">Как это связано с Layero</h2>
        <p class="lead">
          Layero клонирует репозиторий, ставит зависимости, выполняет команду
          сборки и публикует статику в Object Storage за CDN. Этот репозиторий —
          минимальный пример: Solid, Vite, выход в <code>dist/</code>.
        </p>
        <ol class="pipeline">
          <li>
            <strong>Push в GitHub</strong> — срабатывает webhook, стартует
            билдер.
          </li>
          <li>
            <strong>Сборка</strong> — например <code>npm run build</code>,
            артефакты в <code>dist/</code>.
          </li>
          <li>
            <strong>Выдача</strong> — сайт открывается по URL вида{' '}
            <code>*.layero.ru</code> или по своему домену.
          </li>
        </ol>

        <div class="feature-grid">
          <article class="card">
            <h3 class="card-title">Статический выход</h3>
            <p>
              HTML, JS и ассеты из <code>dist/</code> без сервера приложения —
              идеально для SPA на Vite.
            </p>
          </article>
          <article class="card">
            <h3 class="card-title">Логи и переменные</h3>
            <p>
              В интерфейсе Layero видно ход сборки; при необходимости можно
              задать env для <code>vite build</code>.
            </p>
          </article>
          <article class="card">
            <h3 class="card-title">Окружения</h3>
            <p>
              Разные ветки и ручные деплои помогают отделить превью от
              продакшена.
            </p>
          </article>
        </div>

        <p class="build-hint">
          Команда по умолчанию: <code>npm run build</code> → каталог{' '}
          <code>dist</code>.
        </p>
      </section>

      <footer class="site-footer">
        Layero · тестовый сайт · Solid + Vite
      </footer>
    </>
  )
}

export default App
