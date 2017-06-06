import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { CourseManagementSystemSharedModule, UserRouteAccessService } from './shared';
import { CourseManagementSystemHomeModule } from './home/home.module';
import { CourseManagementSystemAdminModule } from './admin/admin.module';
import { CourseManagementSystemAccountModule } from './account/account.module';
import { CourseManagementSystemEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        CourseManagementSystemSharedModule,
        CourseManagementSystemHomeModule,
        CourseManagementSystemAdminModule,
        CourseManagementSystemAccountModule,
        CourseManagementSystemEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class CourseManagementSystemAppModule {}
