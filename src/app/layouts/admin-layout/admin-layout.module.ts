import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ClientsComponent } from '../../clients/clients.component';
import { AddEditClientsComponent } from '../../clients/add-edit-clients/add-edit-clients.component';
import { MatTableModule } from '@angular/material/table';
import { FournisseursComponent } from '../../fournisseurs/fournisseurs.component';
import { AddEditFournissuresComponent } from '../../fournisseurs/add-edit-fournissures/add-edit-fournissures.component';
import { ProduitsComponent } from '../../produits/produits.component';
import { AddEditPtoduitsComponent } from '../../produits/add-edit-ptoduits/add-edit-ptoduits.component';
import { SocietesComponent } from '../../societes/societes.component';
import { AddEditSocietesComponent } from '../../societes/add-edit-societes/add-edit-societes.component';
import { BonEntrerComponent } from '../../bon-entrer/bon-entrer.component';
import { ChambresComponent } from '../../chambres/chambres.component';
import { AddEditChambresComponent } from '../../chambres/add-edit-chambres/add-edit-chambres.component';
import { AddEditBonEntrerComponent } from '../../bon-entrer/add-edit-bon-entrer/add-edit-bon-entrer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClientsComponent,
    AddEditClientsComponent,
    FournisseursComponent,
    AddEditFournissuresComponent,
    ProduitsComponent,
    AddEditPtoduitsComponent,
    SocietesComponent,
    AddEditSocietesComponent,
    BonEntrerComponent,
    ChambresComponent,
    AddEditChambresComponent,
    AddEditBonEntrerComponent,

   
    
  ]
})

export class AdminLayoutModule {}
