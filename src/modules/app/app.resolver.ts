import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  apiInfo(): string {
    return 'Third-party GraphQL api serving data from DebatDirect. Version: 0.0.1-alpha';
  }
}
