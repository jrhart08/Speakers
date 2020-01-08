FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Speakers.Api/Speakers.Api.csproj", "Speakers.Api/"]
COPY ["Speakers.Services/Speakers.Services.csproj", "Speakers.Services/"]
COPY ["Speakers.DataAccess/Speakers.DataAccess.csproj", "Speakers.DataAccess/"]
COPY ["Speakers.Domain/Speakers.Domain.csproj", "Speakers.Domain/"]
RUN dotnet restore "Speakers.Api/Speakers.Api.csproj"
COPY . .
WORKDIR "/src/Speakers.Api"
RUN dotnet build "Speakers.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Speakers.Api.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS final
WORKDIR /app
EXPOSE 80
EXPOSE 443
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Speakers.Api.dll"]
