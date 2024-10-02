import { PageContainer } from '@/components/PageContainer';
import { BookOpen, Library } from 'lucide-react';

export const DashboardPage = () => {
    return (
        <PageContainer title="Inicio">
            <div className="h-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white shadow-md rounded-lg p-4 md:p-6 ">
                    <h2 className="text-2xl font-semibold text-gray-800">Bienvenido al Panel de Administración</h2>
                    <p className="mt-2 text-gray-600">
                        Aquí podrás gestionar todos los aspectos de tu librería. ¿Qué te gustaría hacer hoy?
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
                    <div className="flex flex-row items-center justify-between">
                        <h2>Total Libros</h2>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="text-2xl font-bold">1,234</div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
                    <div className="flex flex-row items-center justify-between">
                        <h2>Categorías</h2>
                        <Library className="h-4 w-4 text-muted-foreground" />{' '}
                    </div>
                    <div className="text-2xl font-bold">45</div>
                </div>
                {/*
                            
							*/}
            </div>
            {/* <div className="bg-white p-4 rounded-md shadow-md">
                            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <h3 className="text-sm font-medium">Total Libros</h3>
                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">1,234</div>
                            </div>
                        </div> */}
            {/* <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Categorías</CardTitle>
                                <Library className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">25</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Autores</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">567</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Libros Nuevos (Este Mes)</CardTitle>
                                <PlusCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">23</div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Acciones Rápidas</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <Button className="w-full justify-start" variant="outline" asChild>
                                        <Link href="/add-book">Añadir Nuevo Libro</Link>
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline" asChild>
                                        <Link href="/manage-categories">Gestionar Categorías</Link>
                                    </Button>
                                    <Button className="w-full justify-start" variant="outline" asChild>
                                        <Link href="/reports">Ver Informes</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Libros Recientes</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-center">
                                        <span>Cien años de soledad</span>
                                        <Button variant="ghost" size="sm">
                                            Ver
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>1984</span>
                                        <Button variant="ghost" size="sm">
                                            Ver
                                        </Button>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>El principito</span>
                                        <Button variant="ghost" size="sm">
                                            Ver
                                        </Button>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card> */}
            {/* </div>
                </div>
				*/}
        </PageContainer>
    );
};
