import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TokenConfigurationComponent} from "./components/token-configuration/token-configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {AuthGuard} from "./auth.guard";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'configuration',
    component: TokenConfigurationComponent,
  },
  {
    path: 'entity-extraction',
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'text-similarity',
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'language-detection',
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sentiment-analysis',
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
