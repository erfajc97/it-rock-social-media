import type { Meta, StoryObj } from "@storybook/nextjs";
import { LoginForm } from "@/src/components/molecules/LoginForm";
import { AnimatedBackground } from "@/src/components/atoms/AnimatedBackground";

const meta = {
  title: "Molecules/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Formulario de inicio de sesión con validación, soporte para credenciales y autenticación con Google. Incluye manejo de errores y estados de carga.",
      },
    },
    nextAuth: {
      session: null,
    },
    reduxState: {
      auth: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      },
      posts: {
        posts: [],
        isLoading: false,
        error: null,
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AnimatedBackground className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-white/50">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
                <span className="text-blue-600 drop-shadow-lg">IT</span>{" "}
                <span className="text-purple-600 drop-shadow-lg">Rock</span>
              </h1>
              <p className="text-lg text-gray-800 font-semibold mb-1 mt-2">
                Bienvenido
              </p>
              <p className="text-sm text-gray-600 font-medium">
                La red social IT ROCK challenge
              </p>
            </div>
            <Story />
            <p className="mt-6 text-center text-sm text-gray-600">
              Para probar, usa cualquier email y contraseña:{" "}
              <strong className="text-blue-600 font-bold">123456</strong>
            </p>
          </div>
        </div>
      </AnimatedBackground>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Formulario de login en su estado inicial, sin errores ni estados de carga.",
      },
    },
  },
};

export const WithValidationErrors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Muestra el formulario con errores de validación cuando los campos están vacíos o el email es inválido.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    // Simular intento de envío con campos vacíos
    const form = canvasElement.querySelector("form");
    if (form) {
      const submitEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
      });
      form.dispatchEvent(submitEvent);
    }
  },
};

export const Loading: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Estado del formulario cuando se está procesando la autenticación. Los botones están deshabilitados y muestran el texto de carga.",
      },
    },
  },
};

export const WithAuthError: Story = {
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Muestra el formulario con un mensaje de error cuando las credenciales son incorrectas. El error aparece automáticamente cuando se intenta iniciar sesión con credenciales inválidas.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="space-y-4 w-full">
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          Email o contraseña incorrectos
        </div>
        <Story />
      </div>
    ),
  ],
};

export const Isolated: Story = {
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "Vista del formulario sin el fondo animado, mostrando solo el componente LoginForm.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Story />
        </div>
      </div>
    ),
  ],
};
