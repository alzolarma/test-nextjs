import { Button } from "../atoms/Buttom";

interface ConfirmationDialogProps {
  title: string;
  message: string;
  icon: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const ConfirmationDialog = ({ title, message, icon, onCancel, onConfirm, isLoading }: ConfirmationDialogProps) => {
  const isReady = !isLoading;

  return (
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full transform transition-all p-8 space-y-6 animate-in fade-in zoom-in-95">
          <div className="flex items-center gap-4 border-b pb-4">
              <div className="text-red-600 ">
                  {icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          
          <p className="text-gray-600">{message}</p>

          <div className="flex justify-end gap-3 pt-2">
              <Button 
                  variant="ghost" 
                  type="button" 
                  onClick={onCancel} 
                  disabled={isLoading}
                  customClasses="min-w-[100px]"
              >
                Cancelar
              </Button>
              <Button 
                  variant="danger" 
                  type="button" 
                  onClick={onConfirm}
                  disabled={!isReady}
                  customClasses="min-w-[100px]"
              >
                  {isLoading ? (
                      <span className="flex items-center gap-2">
                        Eliminando...
                      </span>
                  ) : (
                      "Confirmar Eliminación"
                  )}
              </Button>
          </div>
      </div>
  );
};