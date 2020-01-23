# In a subdirectory because of some bug:
# https://github.com/microsoft/DockerTools/issues/212
# https://github.com/microsoft/DockerTools/issues/141

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster as base
RUN ["dotnet", "tool", "install", "--global", "dotnet-ef", "--version", "3.1.0"]
ENV PATH="${PATH}:/root/.dotnet/tools"

WORKDIR /src
COPY ["Speakers.DataMigrations/Speakers.DataMigrations.csproj", "Speakers.DataMigrations/"]
COPY ["Speakers.DataAccess/Speakers.DataAccess.csproj", "Speakers.DataAccess/"]
COPY ["Speakers.Domain/Speakers.Domain.csproj", "Speakers.Domain/"]
RUN ["dotnet", "restore", "Speakers.DataMigrations/Speakers.DataMigrations.csproj"]

COPY ["Speakers.DataMigrations/", "Speakers.DataMigrations/"]
COPY ["Speakers.DataAccess/", "Speakers.DataAccess/"]
COPY ["Speakers.Domain/", "Speakers.Domain/"]

WORKDIR "/src/Speakers.DataMigrations"

ENTRYPOINT ["dotnet", "ef", "database", "update"]
